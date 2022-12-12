# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  name        :string           not null
#  price       :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  seller_id   :bigint           not null
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#  index_products_on_name         (name)
#  index_products_on_seller_id    (seller_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (seller_id => users.id)
#
class Product < ApplicationRecord
    validates :description, presence: true
    validates :price, presence: true, numericality: { greater_than:0, less_than: 1000000}
    validates :name, presence: true
    # validates :category_id, presence:true
    # validates :seller_id, presence:true

    belongs_to :seller,
    foreign_key: :seller_id,
    primary_key: :id,
    class_name: :User


    belongs_to :category,
    foreign_key: :category_id,
    primary_key: :id,
    class_name: :Category

    has_many :cart,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: :Cart

    has_one_attached :photo

end
