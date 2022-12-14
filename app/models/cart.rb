# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_carts_on_user_id  (user_id)
#
class Cart < ApplicationRecord
    # validates :user_id, presence: true
    # validates :product_id, presence: true
    validates :quantity, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    # belongs_to :product,
    # primary_key: :id,
    # foreign_key: :product_id,
    # class_name: :Product

    has_many :cart_items

    def add_product(product)
        cart_item = CartItem.new()
        cart_item.product_id = product
        cart_item.cart = self
        cart_item.save!
        cart_item
    end
end
