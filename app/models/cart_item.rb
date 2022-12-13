# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  cart_id    :bigint
#  product_id :bigint
#
# Indexes
#
#  index_cart_items_on_cart_id     (cart_id)
#  index_cart_items_on_product_id  (product_id)
#
class CartItem < ApplicationRecord
    
    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product

    belongs_to :cart,
    primary_key: :id,
    foreign_key: :cart_id,
    class_name: :Cart
end
