class CreateCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :categories do |t|
      t.string :name, null:false, index: { unique: true }
      t.string :label, null: false, index: { unique: true }
      t.timestamps
    end
  end
end
