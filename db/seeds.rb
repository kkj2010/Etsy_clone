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
    demo_user.create_cart!

    Category.create!(name:"holiday_shop", label: "Holiday Shop")
    Category.create!(name:"jewelry", label: "Jewelry & Accessories")
    Category.create!(name:"clothing_shoes", label: "Clothing & Shoes")
    Category.create!(name:"home_living", label: "Home & Living")
    Category.create!(name: "wedding_party", label: "Wedding & Party")
    Category.create!(name: "toys", label: "Toys")
    Category.create!(name: "art", label: "Art & Collectibles")


    puts 'Creating products...'


    jewelry1= Product.create!{
        description: "Beautiful threader earrings with a minimalist vibe. Sleek, subtle and very cool.
        Earrings are Gold plated over 925 sterling silver
        Perfect for sensitive ears.
        Size is around 2 3/4 inch long, when pulled all the way down. Size of the bar 1/2 inch
        Those earrings are very easy to use, just pull thru ears and set at the desired length."
        price: 3000,
        name: "Ear threader earrings, Gold ear threader, Sterling silver threader earrings, Chain earrings, Long chain ear threader"
    }

    jewelry2= Product.create!{
        description: "*This listing is for one Zodiac constellation necklace only. Other necklaces shown layered on the model are available separately in my shop.

        Perfectly minimal and Dainty, this necklace is made with a 14k gold filled chain and a gold plated zodiac constellation pendant, set with miniature cubic zirconia diamonds.
        
        Please select SIGN and LENGTH from the drop down menus.
        The length includes the pendant.
        The blonde model is wearing an 18inch necklace.
        The dark-hair model is wearing a 16inch necklace.
        
        
        C O M P O N E N T S:
        Chain - 14k gold filled.
        Constellations - size varies between 16x11mm to 19x20mm, gold plated with cubic zirconia diamonds.
        
        Your item will arrive in an embossed jewelry box - Ready for Gift Giving!"
        price: 3950,
        name: "Celestial Constellation Necklace, Cubic zirconia diamonds, 14k gold filled, cz layering Zodiac necklace,dainty personalized,bridesmaids gift"
    }

    jewelry3= Product.create!{
        description: "These dainty stacking rings are perfect for personalizing with your children's names, dates, or a meaningful word of your choice. If you like tiny and small minimalist jewelry these rings are a great choice!"
        price: 2800,
        name: "Stackable Name Ring, dainty name ring, personalized ring with your word choice, gift for mom ring, stacking ring"
    }


    jewelry4= Product.create!{
        description: "A birthstone is a gemstone that represents a person's period of birth that is usually the month or zodiac sign. Birthstones are typically worn as jewelry to celebrate these special events, and many people use them to wish the wearer luck, love and good health during their life. Personalized birthstones for yourself, mom, grandma or anyone special in your life.

        You can create your family birthsyone bracelet by picking up to 12 birthstones . This Family Birthstones Necklace makes perfect personalized gift
        
        We beautifully package every item in a handmade wooden jewelry gift box ."
        price: 2000,
        name: "3 Rows Gold Disk Birthstone Bracelet, Initial Minimalist Birthstone, Family Birthstone Bracelet, Personalized Gifts for Mom and Grandma"
    }

    jewelry5= Product.create!{
        description: "These dainty stacking rings are perfect for personalizing with your children's names, dates, or a meaningful word of your choice. If you like tiny and small minimalist jewelry these rings are a great choice!"
        price: 2800,
        name: "Stackable Name Ring, dainty name ring, personalized ring with your word choice, gift for mom ring, stacking ring"
    }


    jewelry6= Product.create!{
        description: "Simple minimalistic silver 925 ring with gold of 14 carats, that is melted into the silver, not painted.
        Perfect for everyday use and layering other rings.
        Great for everyday use or any special occasion. A perfect gift for your friend or a loved one. Piece to have and enjoy for years.
        We have different finishes available (striped, by hammer, etc..) and also different sizes. All our rings are made with a lot of love and heart.
        We hope you enjoy our art."
        price: 5448,
        name: "Minimalistic handmade silver ring with gold. Modern birthday gift Wedding ring for proposal unique style Vaidus jewelry"
    }




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