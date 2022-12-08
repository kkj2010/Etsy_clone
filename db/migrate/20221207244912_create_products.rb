class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null:false
      t.bigint :seller_id, null:false
      t.integer :price, null:false
      t.text :description, null:false
      t.bigint :category_id, null:false
      t.timestamps
    end
    add_index :products, :seller_id
    add_index :products, :category_id
    add_index :products, :name

    add_foreign_key :products, :users, column: :seller_id
    add_foreign_key :products, :categories, column: :category_id
  end
end
