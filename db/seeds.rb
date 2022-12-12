# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
    puts 'Destroying tables...'

    User.destroy_all
    Category.destroy_all
    Product.destroy_all

    puts 'Resetting primary keys ...'
    ["users", "products"].each do |table_name|
        ApplicationRecord.connection.reset_pk_sequence!(table_name)
    end

    puts 'Creating seed data ...'

    demo_user = User.create!(email:"user@gmail.com" ,first_name:"user", password:"1234567")
    Category.create!(name:"holiday_shop", label: "Holiday Shop")
    Category.create!(name:"jewelry", label: "Jewelry & Accessories")
    Category.create!(name:"clothing_shoes", label: "Clothing & Shoes")
    Category.create!(name:"home_living", label: "Home & Living")
    Category.create!(name: "wedding_party", label: "Wedding & Party")
    Category.create!(name: "toys", label: "Toys")
    Category.create!(name: "art", label: "Art & Collectibles")



    20.times do |n|
        product = Product.new(
            description: Faker::Quote.matz,
            price: 10000,
            name: Faker::Commerce.product_name
        )
        product.seller = demo_user
        product.category = Category.all.sample
        product.save!
    end

    puts 'done'

end