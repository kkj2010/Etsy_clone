class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false 
      t.integer :quantity, null: false , default:0
      t.timestamps
    end
    add_index :carts, :user_id
 
  end
end
