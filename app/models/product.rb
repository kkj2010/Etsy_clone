# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  description  :text             not null
#  price        :decimal(10, 2)   not null
#  product_name :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  category_id  :integer          not null
#  seller_id    :integer          not null
#
# Indexes
#
#  index_products_on_category_id   (category_id)
#  index_products_on_product_name  (product_name)
#  index_products_on_seller_id     (seller_id)
#
class Product < ApplicationRecord
    validates :description, presence: true
    validates :price, presence: true, numericality: { greater_than:0, less_than: 1000000}
    validates :product_name, presence: true
    validates :category_id, presence:true
    validates :seller_id, presence:true

    belongs_to :seller,
    foreign_key: :seller_id,
    primary_key: :id,
    class_name: :User


    belongs_to :category,
    foreign_key: :category_id,
    primary_key: :id,
    class_name: :Category

end
