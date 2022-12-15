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


    jewelry1= Product.new(
        description: "Beautiful threader earrings with a minimalist vibe. Sleek, subtle and very cool.
        Earrings are Gold plated over 925 sterling silver
        Perfect for sensitive ears.
        Size is around 2 3/4 inch long, when pulled all the way down. Size of the bar 1/2 inch
        Those earrings are very easy to use, just pull thru ears and set at the desired length.",
        price: 3000,
        name: "Ear threader earrings, Gold ear threader, Sterling silver threader earrings, Chain earrings, Long chain ear threader",
        seller: demo_user,
        category: Category.all.sample
    )

    6.times do |n|
        jewelry1.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry1/jewelry1-#{n+1}.png"), filename: "jewelry1-#{n+1}.png")
    end

    jewelry1.save!
  


    jewelry2= Product.new(
        description: "*This listing is for one Zodiac constellation necklace only. Other necklaces shown layered on the model are available separately in my shop.
        Perfectly minimal and Dainty, this necklace is made with a 14k gold filled chain and a gold plated zodiac constellation pendant, set with miniature cubic zirconia diamonds.
        Please select SIGN and LENGTH from the drop down menus.
        The length includes the pendant.
        The blonde model is wearing an 18inch necklace.
        The dark-hair model is wearing a 16inch necklace.
        
        C O M P O N E N T S:
        Chain - 14k gold filled.
        Constellations - size varies between 16x11mm to 19x20mm, gold plated with cubic zirconia diamonds.
        
        Your item will arrive in an embossed jewelry box - Ready for Gift Giving!",
        price: 3950,
        name: "Celestial Constellation Necklace, Cubic zirconia diamonds, 14k gold filled, cz layering Zodiac necklace,dainty personalized,bridesmaids gift",
        seller: demo_user,
        category: Category.all.sample
    )
    6.times do |n|
        jewelry2.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry2/jewelry2-#{n+1}.png"), filename: "jewelry2-#{n+1}.png")
    end
    # jewelry3= Product.create!(
    #     description: "These dainty stacking rings are perfect for personalizing with your children's names, dates, or a meaningful word of your choice. If you like tiny and small minimalist jewelry these rings are a great choice!",
    #     price: 2800,
    #     name: "Stackable Name Ring, dainty name ring, personalized ring with your word choice, gift for mom ring, stacking ring",
    #     seller: demo_user,
    #     category: Category.all.sample
    # )
    jewelry2.save!

    jewelry4= Product.new(
        description: "A birthstone is a gemstone that represents a person's period of birth that is usually the month or zodiac sign. Birthstones are typically worn as jewelry to celebrate these special events, and many people use them to wish the wearer luck, love and good health during their life. Personalized birthstones for yourself, mom, grandma or anyone special in your life.

        You can create your family birthsyone bracelet by picking up to 12 birthstones . This Family Birthstones Necklace makes perfect personalized gift
        
        We beautifully package every item in a handmade wooden jewelry gift box .",
        price: 2000,
        name: "3 Rows Gold Disk Birthstone Bracelet, Initial Minimalist Birthstone, Family Birthstone Bracelet, Personalized Gifts for Mom and Grandma",
        seller: demo_user,
        category: Category.all.sample
    )
    6.times do |n|
        jewelry4.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry4/jewelry4-#{n+1}.png"), filename: "jewelry4-#{n+1}.png")
    end

    jewelry4.save!
    # jewelry5= Product.new(
    #     description: "These dainty stacking rings are perfect for personalizing with your children's names, dates, or a meaningful word of your choice. If you like tiny and small minimalist jewelry these rings are a great choice!",
    #     price: 2800,
    #     name: "Stackable Name Ring, dainty name ring, personalized ring with your word choice, gift for mom ring, stacking ring",
    #     seller: demo_user,
    #     category: Category.all.sample
    # )


    # jewelry6= Product.new(
    #     description: "Simple minimalistic silver 925 ring with gold of 14 carats, that is melted into the silver, not painted.
    #     Perfect for everyday use and layering other rings.
    #     Great for everyday use or any special occasion. A perfect gift for your friend or a loved one. Piece to have and enjoy for years.
    #     We have different finishes available (striped, by hammer, etc..) and also different sizes. All our rings are made with a lot of love and heart.
    #     We hope you enjoy our art.",
    #     price: 5448,
    #     name: "Minimalistic handmade silver ring with gold. Modern birthday gift Wedding ring for proposal unique style Vaidus jewelry",
    #     seller: demo_user,
    #     category: Category.all.sample
    # )

    # jewelry7= Product.new(
    #     description: "A thin dainty wire wrap ring is the perfect minimalistic beauty to enhance the elegance of your fingers. It can be worn as a statement piece or it can be stacked with our other beautiful pieces.

    #     DETAILS:
        
    #     - 18K Gold filled
    #     - Waterproof ☔️ - will not tarnish or fade
    #     - Free gift box and pouch
        
    #     They can be worn solo or stacked!",
    #     price: 2449,
    #     name: "18K GOLD FILLED Wrap Ring, Gold Stacking Rings, Dainty Ring, Rose Gold Ring, Stacking Ring, Wire Ring, Thin Ring, WATERPROOF/Sweatproof",
    #     seller: demo_user,
    #     category: Category.all.sample
    # )

    # jewelry8= Product.new(
    #     description: "Minimalist & Dainty Gold Stacking Ring Set

    #     ***this ring set comes in a variety of sizes between a US size 4 - 7.5 so that the rings can be worn on multiple fingers
        
        
    #     ***Gift wrapping services are available for all EstyjewelleryArt items! 🎁
        
    #     ***Need more then what is specified as available? Message me for custom large order quantities & special pricing!***
        
        
    #     ***It is our one priority to ensure that our customers are satisfied with their one-of-a-kind pieces.
    #     ",
    #     price: 2365,
    #     name: "12 piece Dainty Gold Stacking Ring Set, Minimalist Stacking Ring Set, minimalist Ring Stack, Stacking Ring Gift Set, Trendy Jewelry Gift",
    #     seller: demo_user,
    #     category: Category.all.sample
    # )

# 
jewelry9= Product.new(
    description: "Gold Name Necklace, Script Name Necklace, Personalized Gift, Handmade Name Necklace, Mother's Day Gift, Bridesmaid Gift, Gift For Her

    This is a Personalized Name necklace. You can also choose it for your friends, family and yourself on some special days.
    
    
    MATERIAL: High Quality Solid 925 Sterling Silver (Safe for sensitive skin)
    
    FINISH: Sterling Silver - Gold Plated - Rose Gold Plated
    
    Made of 100% 925 sterling silver",
    price: 1950,
    name: "Gold Name Necklace, Script Name Necklace, Personalized Gift, Handmade Name Necklace, Mother's Day Gift, Bridesmaid Gift, Gift For Her",
    seller: demo_user,
    category: Category.all.sample
)
6.times do |n|
    jewelry9.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry9/jewelry9-#{n+1}.png"), filename: "jewelry9-#{n+1}.png")
end

jewelry9.save!

jewelry10= Product.new(
    description: "A romantic and timeless locket in a modern, dainty silhouette. The functional heart locket hangs upon a delicately twisted chain. Versatile enough to simply be worn solo or layered as the perfect compliment to your favorite necklaces. Adjustable between 18-21 inches.

    Our materials make for an amazing, high quality, seamless, jewelry piece with longevity. Our necklaces are plated with 18k gold, 18k rose gold, or rhodium and finished with a protective coating. A little secret we’ll keep between us: it looks way more than it costs.",
    price: 2800,
    name: "Heart Locket Minimalist, Delicate Jewelry Gold, Rose Gold, or Silver by HONEYCAT",
    seller: demo_user,
    category: Category.all.sample
)
6.times do |n|
    jewelry10.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry10/jewelry10-#{n+1}.png"), filename: "jewelry10-#{n+1}.png")
end

jewelry10.save!




    3.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = jewelry1
        review.save!
    end

    # 20.times do |n|
    #     product = Product.new(
    #         description: Faker::Quote.matz,
    #         price: 10000,
    #         name: Faker::Commerce.product_name
    #     )
    #     product.seller = demo_user
    #     product.category = Category.all.sample
    #     product.save!
    # end

    puts 'done'

end