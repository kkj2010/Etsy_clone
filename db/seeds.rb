


    puts 'Destroying tables...'

    Review.destroy_all
    Product.destroy_all
    Category.destroy_all
    CartItem.destroy_all
    Cart.destroy_all
    User.destroy_all


    puts 'Resetting primary keys ...'
    ["users", "products","reviews", "categories","cart_items","carts"].each do |table_name|
        ApplicationRecord.connection.reset_pk_sequence!(table_name)
    end

    puts 'Creating seed data ...'

    demo_user = User.create!(email:"user@gmail.com" ,first_name:"demouser", password:"1234567")
    demo_user.create_cart!
    demo_user= User.first
  

    Category.create!(name:"holiday_shop", label: "Holiday Shop")
    jewelry= Category.create!(name:"jewelry", label: "Jewelry & Accessories")
    Category.create!(name:"clothing_shoes", label: "Clothing & Shoes")
    Category.create!(name:"home_living", label: "Home & Living")
    Category.create!(name: "wedding_party", label: "Wedding & Party")
    Category.create!(name: "toys", label: "Toys")
    Category.create!(name: "art", label: "Art & Collectibles")
    # jewelry = Category.find_by(name: 'jewelry')

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
        category: jewelry
    )

    6.times do |n|
        jewelry1.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry1/jewelry1-#{n+1}.png"), filename: "jewelry1-#{n+1}.png")
    end

    jewelry1.save!
  
jewelry7= Product.new(
    description: "A thin dainty wire wrap ring is the perfect minimalistic beauty to enhance the elegance of your fingers. It can be worn as a statement piece or it can be stacked with our other beautiful pieces.

    DETAILS:
    
    - 18K Gold filled
    - Waterproof ☔️ - will not tarnish or fade
    - Free gift box and pouch
    
    They can be worn solo or stacked!",
    price: 2449,
    name: "18K GOLD FILLED Wrap Ring, Gold Stacking Rings, Dainty Ring, Rose Gold Ring, Stacking Ring, Wire Ring, Thin Ring, WATERPROOF/Sweatproof",
    seller: demo_user,
    category: jewelry
)

6.times do |n|
    jewelry7.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry7/jewelry7-#{n+1}.png"), filename: "jewelry7-#{n+1}.png")
end


jewelry7.save!


jewelry3= Product.new(
    description: "These dainty stacking rings are perfect for personalizing with your children's names, dates, or a meaningful word of your choice. If you like tiny and small minimalist jewelry these rings are a great choice!",
    price: 2800,
    name: "Stackable Name Ring, dainty name ring, personalized ring with your word choice, gift for mom ring, stacking ring",
    seller: demo_user,
    category: jewelry
)


3.times do |n|
    jewelry3.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry3/jewelry3-#{n+1}.png"), filename: "jewelry3-#{n+1}.png")
end

jewelry3.save!


jewelry4= Product.new(
    description: "A birthstone is a gemstone that represents a person's period of birth that is usually the month or zodiac sign. Birthstones are typically worn as jewelry to celebrate these special events, and many people use them to wish the wearer luck, love and good health during their life. Personalized birthstones for yourself, mom, grandma or anyone special in your life.

    You can create your family birthsyone bracelet by picking up to 12 birthstones . This Family Birthstones Necklace makes perfect personalized gift
    
    We beautifully package every item in a handmade wooden jewelry gift box .
    ",
    price: 2000,
    name: "3 Rows Gold Disk Birthstone Bracelet, Initial Minimalist Birthstone, Family Birthstone Bracelet, Personalized Gifts for Mom and Grandma",
    seller: demo_user,
    category: jewelry
)


6.times do |n|
    jewelry4.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry4/jewelry4-#{n+1}.png"), filename: "jewelry4-#{n+1}.png")
end

jewelry4.save!




jewelry16= Product.new(
    description: "N A O M I ∙ T W I S T E D ∙ H O O P S

    • Material: High Quality Solid 925 Sterling Silver
    
    • Finish: Sterling Silver ∙ 18K Gold
    
    • Dimensions: Solid 16mm Twisted Hoops.
    
    • Sold as a pair
    ",
    price: 2005,
    name: "Naomi Twisted Hoops by Caitlyn Minimalist • Minimalist Earrings • Huggie Earrings • Birthday Gift • Perfect Gift for Her ",
    seller: demo_user,
    category: jewelry
)


6.times do |n|
    jewelry16.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry16/jewelry16-#{n+1}.png"), filename: "jewelry16-#{n+1}.png")
end

jewelry16.save!



jewelry15= Product.new(
    description: "• C H A R A C T E R I S T I C S
    - 100% 14k Solid Gold earrings (doesn't cause allergies, even on sensitive skins)
    - Length : 8 mm
    - Delivered in our small, white and gold fabric jewelry pouch and Zoaje gift box!
    ",
    price: 7828,
    name: "KENYA dainty 14k solid gold studs bar, Gold bar earrings, Gold studs",
    seller: demo_user,
    category: jewelry
)


6.times do |n|
    jewelry15.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry15/jewelry15-#{n+1}.png"), filename: "jewelry15-#{n+1}.png")
end

jewelry15.save!



jewelry14= Product.new(
    description: "Pearl by the yard necklace with natural freshwater pearls.

    Sizing:
    Length is measured from clasp to the very first ring, with one inch of 3mm rings for size adjustment. For example, a 16 inch necklace is adjustable between 16 and 17 inches.
    ",
    price: 3000,
    name: "14k Gold Pearl Necklace, Dainty Freshwater Pearl Necklace, Tiny Pearl Necklace, Bridesmaid Gifts",
    seller: demo_user,
    category: jewelry
)


6.times do |n|
    jewelry14.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry14/jewelry14-#{n+1}.png"), filename: "jewelry14-#{n+1}.png")
end

jewelry14.save!



jewelry9= Product.new(
    description: "100% 14k Gold Filled, Sterling Silver, or Rose Gold Filled and 8k , 14k, 18k Solid gold
    All raw materials are Italia sourced
    The necklace can be personalized with NAME, NUMBER, WORD
    Name size - lowercase letters are approximately 4 mm and uppercase letters are approximately 6 mm
    ",
    price: 1760,
    name: "14k Solid Gold Name Necklace, Personalized Jewelry, Personalized Gift, Initial Name Necklace, Gold Name Necklace, Christmas Gift, Gift for",
    seller: demo_user,
    category: jewelry
)

6.times do |n|
    jewelry9.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry9/jewelry9-#{n+1}.png"), filename: "jewelry9-#{n+1}.png")
end



jewelry9.save!




    jewelry12= Product.new(
        description: "Every flower is a soul blossoming in nature. Make it your own special flower necklace.
        Follow the minimalist lifestyle, it's dainty and simple to wear everyday!
        A perfect gift for your beloved ones, especially Mom and Daughter.
    
        
        DETAILS:
        
        • Material: 925 Sterling Silver
        • Color: 100% Silver, 18k Gold Filled, 18k Rosegold Filled
        • Diameter: Big Oval (15mm), Little Oval (13mm)
        
        • Font F23 is by default if you do not specify any font.
        
        • Engraving option:
        - 1 side: Engrave Birth Flower on 1 side
        - 2 sides: Engrave Birth Flower on 1 side, and Words/Birth Flower on other side. Words could be by FONT or your handwriting.
        - If you want to engrave any flower other than what we listed, please feel free to contact us.
        
        • This listing is for 1 necklace. If you want to buy more than 1 necklace, please add to cart for each necklace with each personalization.",
        price: 3999,
        name: "Personalized Mother Daughter Necklace | Birth Month Flower Necklace | Minimalist Flower Necklace | Gold Filled Necklace | Christmas Gift",
        seller: demo_user,
        category: jewelry
    )
    5.times do |n|
        jewelry12.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry12/jewelry12-#{n+1}.png"), filename: "jewelry12-#{n+1}.png")
    end

    jewelry12.save!




    jewelry18= Product.new(
    description: "3d earrings from Tangram collection.
    These unique earrings have been made of brushed finish raw brass and sterling silver bar and earnuts.
    These are hand cut and handmade by me specially for your order. No two pairs are exactly equal.
    
    Size: 28 mm  aprox.
    
    Note: Since the pieces are handmade, and in some of my designs are used natural stones, size and color can be slightly varied from one another.
    Items shown are not actual size as photos have been enlarged or enhanced to show detail. Actual color may vary slightly depending on the screen resolution and quality of monitor you are using.
    ",
    price: 5144,
    name: "Gold stud earrings, Modern jewelry, Gold geometric earrings, moon stud earrings, geometric stud earrings, gift for her under 50",
    seller: demo_user,
    category: jewelry
)


3.times do |n|
    jewelry18.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry18/jewelry18-#{n+1}.png"), filename: "jewelry18-#{n+1}.png")
end

jewelry18.save!



jewelry6= Product.new(
    description: "Simple minimalistic silver 925 ring with gold of 14 carats, that is melted into the silver, not painted.
    Perfect for everyday use and layering other rings.
    Great for everyday use or any special occasion. A perfect gift for your friend or a loved one. Piece to have and enjoy for years.
    We have different finishes available (striped, by hammer, etc..) and also different sizes. All our rings are made with a lot of love and heart.
    We hope you enjoy our art.",
    price: 5448,
    name: "Minimalistic handmade silver ring with gold. Modern birthday gift Wedding ring for proposal unique style Vaidus jewelry",
    seller: demo_user,
    category: jewelry
)
3.times do |n|
    jewelry6.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry6/jewelry6-#{n+1}.png"), filename: "jewelry6-#{n+1}.png")
end

jewelry6.save!



jewelry17= Product.new(
    description: "Handmade polished sterling silver ear cuff.
    A crescent line on the front, and a circle on the back to hold the cuff securely in place.
    
    Dimensions: 38x20mm
    
    Width: 1mm
    
    Sold: Individually or as a pair
    ",
    price: 4697,
    name: "Circle & Long Line - silver ear cuff - sterling silver curved ear cuff earring - minimalist ear cuff",
    seller: demo_user,
    category: jewelry
)
5.times do |n|
    jewelry17.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/jewerly/jewelry17/jewelry17-#{n+1}.png"), filename: "jewelry17-#{n+1}.png")
end

jewelry17.save!



    3.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 4
    review.product = jewelry1
    review.save!
end


2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 4
    review.product = jewelry3
    review.save!
end


    2.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = jewelry4
        review.save!
    end

    3.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = jewelry6
        review.save!
    end
    


    1.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = jewelry7
        review.save!
    end

    

    3.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = jewelry9
        review.save!
    end


    2.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = jewelry12
        review.save!
    end

3.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = jewelry14
        review.save!
    end

puts 'done'

