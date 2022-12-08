# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  label      :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_categories_on_label  (label) UNIQUE
#  index_categories_on_name   (name) UNIQUE
#
class Category < ApplicationRecord
    validates :name, presence:true, uniqueness: true
    validates :label, presence:true, uniqueness: true

    has_many :products,
    foreign_key: :category_id,
    primary_key: :id,
    class_name: :Product
end
