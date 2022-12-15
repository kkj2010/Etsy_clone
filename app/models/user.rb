# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#
class User < ApplicationRecord
    has_secure_password
    before_validation :ensure_session_token
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :email, presence: true , uniqueness: true 
    validates :first_name, presence: true
    validates :session_token, uniqueness: true
    validates :email, format: {with: URI::MailTo::EMAIL_REGEXP}

    has_many :products, 
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :Product
 
    has_one :cart,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Cart

    has_many :cart_items,
    through: :cart, 
    source: :cart_items

    has_many :reviews
    
   

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user&.authenticate(password) 
            return user
        else
            nil 
        end
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
