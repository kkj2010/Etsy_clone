


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
  

    holiday_shop= Category.create!(name:"holiday_shop", label: "Holiday Shop")
    jewelry= Category.create!(name:"jewelry", label: "Jewelry & Accessories")
    clothing_shoes= Category.create!(name:"clothing_shoes", label: "Clothing & Shoes")
    home_living= Category.create!(name:"home_living", label: "Home & Living")
    wedding_party= Category.create!(name: "wedding_party", label: "Wedding & Party")
    toys= Category.create!(name: "toys", label: "Toys")
    art= Category.create!(name: "art", label: "Art & Collectibles")
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


art4= Product.new(
    description: "These are a set of 3 beautifully scented pumpkin candles to set the ‘autumn mood.’ They weight approximately 100g each.

    Matches are apart of the gift wrapping option, not included in regular orders 🤍
    
    Please note the colours may differ slightly from the photo due to fragrance oil colours and also stock + availability. Two pumpkins will always be two different shades of orange and one pumpkin will be a nude/cream colour 🤍
    
    🤍 They are made using non toxic, 100% soy wax.
    
    🤍 Vegan and cruelty free.
    
    🤍 All of my candles are unique and no two are the same - this adds to the beauty of hand crafted products. What will be the same though, is the love and care put into each individual candle.
    
    ",
    price: 1556,
    name: "Trio of Pumpkins,Pumpkin Candle,Soy Candle,Autumn,Halloween Decor,Autumn Decor,Fall Decor,Pumpkin Spice,Table Decor,Handmade Candle,Vegan",
    seller: demo_user,
    category: art
)
6.times do |n|
    art4.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/art/art4/art4-#{n+1}.png"), filename: "art4-#{n+1}.png")
end

art4.save!

art3= Product.new(
    description: "Our deliciously scented autumnal inspired wax melts are finally here just in time for everyone's favourite cosy season! They will make a great addition to your autumn decor and will fill your space with a perfect autumn fragrance!

    Each pack contains your selection of cream leaf shaped melts that contain gold & copper eco friendly biodegradable candle safe glitter. All of our melts are handmade with 100% soy wax in our home studio in the North of England.
    - Soy wax has been proven to burn slower and longer, it is natural and non toxic and has a much cleaner burn compared to other waxes out there.
    
    You can choose from the options whether you would like a pack of 4, 6 or 8.
    Scents available are:
    Cinnamon Vanilla - A irresistible blend of cinnamon, clove bud, creamy nutmeg and vanilla bean.
    
    Pumpkin Spice - An absolute classic, the essential Autumnal fragrance!
    
    Autumn Fruits - A sweet autumnal fragrance composed of a mixture of freshly picked berries and apples.
    
    
    As all our wax melts are handmade in small batches they may slightly differ in colour from those shown in the images.
    
    Vegan & cruelty free.
    
    Any questions then please just ask!
    
    ",
    price: 759,
    name: "Autumn Wax Melts / Leaf Soy Wax Melts / Autumn Themed Gift / Pumpkin Spice Autumn Fragrance / Fall Autumn Home Decor / Cinnamon Wax Melts",
    seller: demo_user,
    category: art
)
5.times do |n|
    art3.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/art/art3/art3-#{n+1}.png"), filename: "art3-#{n+1}.png")
end

art3.save!

art2= Product.new(
    description: "What a super cute sign...Looks so good on a gallery wall of pictures!

    Quality hand painted mini sign that can be hung with the sawtooth hanger on the back or stand on it's own. Sign measure 6 3/4 x 6 3/4 with dark stained frame and sealed with a polyurethane to protect.
    
    
    We pride ourselves on creating quality hand painted signs that our customers will love in their own homes, or love giving as a gift.
    
    Our process starts from hand selecting our own pine wood from local lumber yards. We then cut each sign to size, fill, and sand smooth. Each sign gets base coated with a cream or black acrylic paint. We then paint words or small images with same acrylic paint using stencils that we cut ourselves. When painting is complete it then goes back to the shop to be lightly sanded and stained to give it a rustic look, and then sealed for protection. All of our signs come with the hardware for hanging your sign and stamped with our logo on the back. Because every piece of wood is different, each sign will look a little different with knots, grain and color. We love this as we feel it makes each sign unique and truly gives it that aged, rustic feel.
    
    ",
    price: 1600,
    name: "Love - Rustic Wood Framed Mini Sign - Love with Arrowx",
    seller: demo_user,
    category: art
)
4.times do |n|
    art2.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/art/art2/art2-#{n+1}.png"), filename: "art2-#{n+1}.png")
end

art2.save!

art1= Product.new(
    description: "We hand-model your children, family, friends and lovers in the pose you choose, then 3D print and create a snow globe to make their favorite bespoke gift.

    Note: Two figures are included with the globe: extra figures are $150 each.
    ",
    price: 6800,
    name: "Your Family and Friends in a Snow Globe!",
    seller: demo_user,
    category: art
)
6.times do |n|
    art1.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/art/art1/art1-#{n+1}.png"), filename: "art1-#{n+1}.png")
end

art1.save!

art5= Product.new(
    description: "Bring the essence of love and nature into your home with a candle that crackles like a bonfire, smells like your favorite garden, and brings the most powerful form of manifestation into your home: a vivid experience of your new reality. Ignite yours to cleanse a room, bring a little bit of nature into your home, and to increase your vibrations for a positive, passionate, and healthy love. 

    Our eco-friendly luxury crystal candles are infused with crystals known to attract love and purity, rose and clear quartz, and are responsibly sourced from Brazil & Morocco. Dried hydrangeas & a rose symbolically adorn the corners. Long-lasting natural scents from Germany are evenly distributed by a wooden-wick that crackles similar a fireplace or bonfire to create the perfect ambiance and an imitation of nature. This makes these candles equally ideal for manifestation, home decor, and the perfect gift for a loved one.
    
    Pink Champagne is a floral, natural, and light fragrance. Notes include: wine, violet leaf, raspberry, cranberry, plum, sugar & rose-- essential oils are said to be stimulating and warming.
    
    Good uses for this candle: Use this candle when aiming to improve or attract relationships, or when feeling self doubt. Best used as part of a self-care ritual such as meditation and bathing.
    ",
    price: 2480,
    name: "Love Spell Rose Quartz Crystal Candle",
    seller: demo_user,
    category: art
)
6.times do |n|
    art5.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/art/art5/art5-#{n+1}.png"), filename: "art5-#{n+1}.png")
end

art5.save!

holiday1= Product.new(
    description: "You can easily put together a beautiful holiday table with durable, classic plates!

    Personalize these holiday plates to enhance your space! We decorate each plate with our signature font design featuring fun holiday words. For a classy and stylish holiday table, order these with one of our greenery garlands.
    
    ---------------------------------
    I T E M D E T A I L S
    
    You can purchase plates individually or in a set. Checkout allows you to select your choices
    Very durable with a nice weight to them
    Images are imprinted onto the plate and will not wear or fade off
    FDA Compliant for food contact
    Plate inks are water based and non-toxic
    NO Melamine, NO BPA, No Harmful Chemicals
    Dishwasher Safe, Microwave safe, Freezer safe
    Oven Safe up to 300° max 1 hour
    Made in the United States
    We offer a lifetime breakage guarantee (subject to terms)
    
    ",
    price: 3950,
    name: "Custom Dinner Plate For Holiday Dinner, Holiday Word Plate, Place Card Words, Table Place Setting, Rustic Holiday Table Decor, Elegant Plate",
    seller: demo_user,
    category: holiday_shop
)
6.times do |n|
    holiday1.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday1/holiday1-#{n+1}.png"), filename: "holiday1-#{n+1}.png")
end

holiday1.save!

holiday8= Product.new(
    description: "This is a snowman Christmas decoration that you can share with your family. You can choose to customize your family's name on the ornament and use it to decorate your Christmas tree.

    This family Christmas ornament is the perfect family reunion gift exchange.
    
    This home decoration is suitable for families with 3-8 members, each family member's name can be customized, and the banner of the hanging ornament can also be customized.
    
    A personalized gift shows you care and is a gift that will always be meaningful. Capturing some meaningful life events in the family will always be remembered and can be a great conversation starter over Christmas.
    
    
    Ornament Details
    
    This Snowman Shaped Family Christmas Ornament is made from 1/4th layer of high quality maple wood each layer, it is a very sturdy ornament and comes with a twine, ready to be placed on your Christmas tree .
    
    The child's name can be customized on each little snowman, and the parent's name can be customized on the big snowman. The number of family members in 3-8 people can be used.
    
    
    Please Note: Custom Random Placement - Size is determined by the number of characters in the name.
    
    ",
    price: 1879,
    name: "Custom Family Christmas Ornament Personalized Family Ornament Wood Ornament Custom Christmas Keepsake Christmas Ornament Set Of 3 4 5 6 ",
    seller: demo_user,
    category: holiday_shop
)
6.times do |n|
    holiday8.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday8/holiday8-#{n+1}.png"), filename: "holiday8-#{n+1}.png")
end

holiday8.save!


holiday4= Product.new(
    description: "Bringing Home the Tree - Farmhouse Christmas Tissue Box Cover

    THIS LISTING IS FOR 1 SQUARE WHITE TISSUE BOX WITH TREE
    
    This adorable Rustic distressed Farmhouse Tissue Box Holder makes a great addition to your Christmas Decor or Bathroom Holiday Decor.
    The Tissue Box is painted in Vintage White, Distressed in Black and has an adorable wood Red Truck with tree attached to the front. The Truck reads Merry Christmas!
    ",
    price: 2495,
    name: "Christmas Tissue Box Cover, Bringing Home the Tree, Farmhouse Christmas Bathroom Holder, Rustic Home Decor, Holiday Decor ",
    seller: demo_user,
    category: holiday_shop
)
6.times do |n|
    holiday4.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday4/holiday4-#{n+1}.png"), filename: "holiday4-#{n+1}.png")
end

holiday4.save!

holiday3= Product.new(
    description: "Welcome to Balloon & Bash!

    Deck your balloons (and your halls!) with these beautiful holly berry stems. No need to water or worry about wilting, as these berry stems are artificial and made to last for years - just wipe down with a damp cloth to keep them clean. From Thanksgiving to Christmas and all the seasons before and after, these vibrant berries will add a touch of color and charm to any home or party decor.
    
    This listing includes:
    
    -5 or 10 faux berry stems (depending on which option you choose from the below drop-down menu)
    
    // Branches are bendable.
    // Each stem is approx. 10” long.
    // Each stem's end is wrapped to prevent popping the balloons they're inserted with.
    // Colors shown on your computer monitor may vary slightly because of color settings. Berries are a nice medium red but may vary from stem to stem, just like in nature!
    ",
    price: 1000,
    name: " Artificial Holly Berry Stems for Holiday Balloon Garlands and Home Decor",
    seller: demo_user,
    category: holiday_shop
)
5.times do |n|
    holiday3.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday3/holiday3-#{n+1}.png"), filename: "holiday3-#{n+1}.png")
end

holiday3.save!

holiday5= Product.new(
    description: "This warm traditional candle ring is beautiful mixture of of spruce and greenery, pine cones, vibrant warm red bubble berries and branching accents.   It creates a beautiful base of Holiday color and texture for your pillar candles. It will fit a little larger pillar at 3-3/4 inches inner diameter and 12+ inches outer diameter

    If you are looking for more than listed for a special occasion, please contact me, there may be more available.
    
    materials: plastic, styrofoam berries, plastic pine cones, plastic base
    
    * Important Item Return Policy ~ Due to the high cost of offering free shipping, if an item was part of an order that contained free shipping, there will be a 20% fee taken off of the refund price for any returned items. As always, please feel free to reach out to me with any questions
    ",
    price: 1699,
    name: "Red Berry Mixed Greenery Pinecone Christmas Winter Pillar Candle Ring ",
    seller: demo_user,
    category: holiday_shop
)
3.times do |n|
    holiday5.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday5/holiday5-#{n+1}.png"), filename: "holiday5-#{n+1}.png")
end

holiday5.save!

holiday6= Product.new(
    description: "With this year's Pantone color Very Peri, this Lavender Snowflake Blossom Purple Greeting Cards will make it unique and memorable of the year 2022 to send out your merry & bright spirits to the loved ones. 💜
    ",
    price: 1095,
    name: "Lavender Snowflake Blossom Greeting Cards With Envelopes | Merry & Bright Flower Purple Christmas Holiday Card Pack, Set Of 5, 10, 25, 50",
    seller: demo_user,
    category: holiday_shop
)
6.times do |n|
    holiday6.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday6/holiday6-#{n+1}.png"), filename: "holiday6-#{n+1}.png")
end

holiday6.save!

holiday9= Product.new(
    description: "Our Personalized Velvet Christmas Stockings are handmade and available in 6 different color options. All our pieces are custom designed and handcrafted. Our unique items complement any home decor style and are the perfect gift this holiday season.

    • Beautiful Customized Christmas Stocking
    • Features twill ribbon loop for easy hanging
    
    Christmas stocking, Personalized Christmas Stocking, Stockings for baby girls, Christmas Stocking for kids
    
    Personalized Stockings, Christmas Stocking with Name, Christmas Stocking, Knit Stockings, Family Stockings, Best Christmas Gifts
    
    Christmas Stockings Personalized, Customized Velvet Stockings, Family Christmas Gifts, Holiday gift
    
    Personalized Christmas Stockings, Holiday Stockings For Christmas Decoration
    ",
    price: 1095,
    name: "Christmas stocking, Personalized Christmas Stocking, Nutcracker Stockings, Nutcracker Ornament",
    seller: demo_user,
    category: holiday_shop
)
4.times do |n|
    holiday9.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday9/holiday9-#{n+1}.png"), filename: "holiday9-#{n+1}.png")
end

holiday9.save!

holiday2= Product.new(
    description: "- Xmas Stocking, Christmas Stocking, Gift Stocking, Handmade Kilim Stocking, Kilim Stocking, Chimney Stocking, Oriental Design Stocking

    ***FREE SHIPPING ON ORDERS OVER $35 TO USA VIA DHL EXPRESS DELİVERY 3-4 DAYS***
    ",
    price: 1500,
    name: "Family Set Christmas Stockings, Personalized Stocking, Christmas Decoration, Personalized Christmas Stocking, Custom Christmas Gift,",
    seller: demo_user,
    category: holiday_shop
)
6.times do |n|
    holiday2.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday2/holiday2-#{n+1}.png"), filename: "holiday2-#{n+1}.png")
end

holiday2.save!

holiday10= Product.new(
    description: "🌟PACKAGE CONTAINS- 2 set five-pointed gold star garlands length --26 feet ,2 set 3D paper star length --13.2 feet. Total length is 39.2 feet.
    🌟SPECIAL DESIGN -Our 3D gold star party decorations garlands are carefully hand-made and machine-sewn together with thread.Five-pointed star gold garlands and 3D paper garlands combo make the decor more vivid.Double sided 3d metallic paper with neat cut,strong,won't come unstitched or broken easily.durable and reusable.
    ",
    price: 1299,
    name: "pinkblume Gold Party Decorations Star Garlands Streamer Gold 3D Stars Metallic Paper Hanging Bunting Banner for Birthday Wedding Baby Bridal Shower Holiday Christmas Ramadan EID Mubarak Party Supplies",
    seller: demo_user,
    category: holiday_shop
)
3.times do |n|
    holiday10.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/holiday/holiday10/holiday10-#{n+1}.png"), filename: "holiday10-#{n+1}.png")
end

holiday10.save!


toys1= Product.new(
    description: "PLEASE NOTE: My processing times are currently around 2 weeks as I have just given birth, however my team is working on processing orders as fast as they can, so it may be sooner. If you really need a gift by a certain date, I do offer a, “Rush My Order” option, but please message me prior to adding this on to ensure I can accommodate your request :)

        If any issues arise with your order, either myself or my team will be reaching out + please feel free to do the same. Thank you for your patience + understanding! 🤍
    ",
    price: 9090,
    name: "Baby Gift Box, Gender Neutral Baby Gift Set, Baby Shower Gift Box, Newborn Gift Box, Welcome Baby Gift Set, Baby Gift, Neutral Baby Gift",
    seller: demo_user,
    category: toys
)
6.times do |n|
    toys1.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/toys/toys1/toys1-#{n+1}.png"), filename: "toys1-#{n+1}.png")
end

toys1.save!

toys2= Product.new(
    description: "Busy Board from Busy Puzzle is the best gift for a baby for Christmas, birthday, baptism and any other holiday.
    This is the best educational toy for toddlers.
    Our Montessori board contains many different details that contribute to the development of fine motor skills of the child.
    A toy that develops logical thinking, memory and perseverance of the baby.
    
    ",
    price: 18990,
    name: "Large Busy Board, Custom Activity Busy Board, Baby Girl Birthday Gift, Personalized Christmas Gifts For Kids, Montessori Toy For Toddlers",
    seller: demo_user,
    category: toys
)
6.times do |n|
    toys2.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/toys/toys2/toys2-#{n+1}.png"), filename: "toys2-#{n+1}.png")
end

toys2.save!


toys3= Product.new(
    description: "Montessori Toys ·

    Toys that will be a great gift for your baby.
    
    A wooden pyramid and a rainbow pile will introduce the baby to concepts such as shape and color, teach you how to distribute objects according to certain criteria, and help develop coordination and logical thinking.
    It also promotes the development of motor skills. The toy is a successful combination of entertainment and the Montessori educational method.
    You can also add a wooden account to the set, which will become an assistant in learning the account.
    ",
    price: 2990,
    name: "Baby Girl Nursery Decor - Pastel Pink Rainbow - Wooden Rainbow Toy - Boho Rainbow Decor - Montessori Toys -Wooden Ring Stacker",
    seller: demo_user,
    category: toys
)
4.times do |n|
    toys3.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/toys/toys3/toys3-#{n+1}.png"), filename: "toys3-#{n+1}.png")
end

toys3.save!

toys5= Product.new(
    description: " Wooden Bow And Arrows Set ·

    Archery for kids offers benefits to their physical and mental development.
    
    · COUPON ·
    When buying 2 or more Baby Toys or Christmas Decor, we have an additional coupon discount: BUSYPUZZLE
    Just add it to your shopping cart.
    
    Setting goals and knowing how to set goals is very important for personal growth. It allows you to realize what needs to improve and then set goals to hit those new targets. Archery helps our kids to learn how to set these goals, a skill they can adapt into their day to day life.
    
    Learning how to become an archer is very much a step by step method, IE nocking the arrow, drawing the bow, aiming and finally shooting. Kids that are interested in archery soon learn that by focusing on each task at a time, they will hit the target more often.
    
    Archery helps to train kids to be more focused, as they improve one of these steps at a time.
    ",
    price: 2500,
    name: "Personalized Archery Set, Bow And Arrows, Outdoor Games For Kids, Montessori Lawn Games, Quiver And Target at Extra Charge, Waldorf Toys",
    seller: demo_user,
    category: toys
)
4.times do |n|
    toys5.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/toys/toys5/toys5-#{n+1}.png"), filename: "toys5-#{n+1}.png")
end

toys5.save!


toys4= Product.new(
    description: "♥Rocky Shore Abacus- Offered in two colors: (Pinks-Sunset) (Blues-Seaside).
    Bring your baby's nursery to life with this beach inspired abacus! The perfect touch of summer!
    ONLY at Ev&Potique!!!
    
    ♥Dimensions: 7in wide x 6in tall
    
    ♥SAFETY: Use is intended for decor. As with any handmade accessory, this product should not be used without proper adult supervision. Do not leave an infant or child unattended with this product. This product contains small parts and the customer and user assumes full responsibility for ensuring that the product is used in a safe manner. By purchasing this product the customer agrees that use and purchase of the product is entirely at the customer’s own risk. Ev&Potique, nor any of its agents or affiliates shall be liable in any way for any direct, indirect, incidental, special, or consequential damages arising out of use of the products. Use at own discretion. Please inspect regularly.
    ",
    price: 2900,
    name: "Rocky Shore Abacus- Rainbow Abacus, Bohemian Decor, Bohemian Baby, Sage Nursery, Wooden, Montessori, Natural Wood, Organic Baby, Ev&Potique",
    seller: demo_user,
    category: toys
)
5.times do |n|
    toys4.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/toys/toys4/toys4-#{n+1}.png"), filename: "toys4-#{n+1}.png")
end

toys4.save!


clothing1= Product.new(
    description: "Details

    Go-to LBD for the hardcore minimalist, this shirt dress is perfect for the warmer seasons, featuring mandarin collar, 1/2 grown-on sleeve, shirt placket with concealed buttons fastenings running all the way down, self-tie belt,and side slits for ease of movement. Fully lined.
    
    
    *Lead time is 2.5 weeks.
    
    Color/Couleur:Black
    Material/Composition: 60 %viscose 40 %cotton (lining: silk cotton blend)
    
    Size/Taille: Made to measure. Please provide BUST/ WAIST/ HIPS size and HEIGHT during checkout. Please note that waist is measured at the thinnest point whereas hips/bust are measured at the fullest/widest point.
    
    
    Default length /Longueur par défaut:110cm(adjustable based on height)
    
    ",
    price: 18500,
    name: "W Dress - black minimalist shirt dress with mandarin collar",
    seller: demo_user,
    category: clothing_shoes
)
5.times do |n|
    clothing1.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/clothing/clothing1/clothing1-#{n+1}.png"), filename: "clothing1-#{n+1}.png")
end

clothing1.save!

clothing2= Product.new(
    description: "Details:

    Double-faced open-front wool cashmere blend jacket with curved lapel, dropped shoulder seams, cocoon sleeves and seam pockets. 100% handsewn. Not lined. Crop fit. Made to order. Ships in 18-21 days.
    
    Colour: ivory ( heathered) , more colours available.
    
    Material/Composition: Double-faced 90% wool /10%cashmere
    
    Size/Taille:Made to measure.Please provide your BUST,WAIST,HIPS SIZE & HEIGHT during checkout.Note that bust and hips are measured at the widest/fullest point whereas waist is measured at the thinnest point.
    
    Length /Longueur:56cm
    ",
    price: 33900,
    name: "Jules Jacket {more colours available}",
    seller: demo_user,
    category: clothing_shoes
)
4.times do |n|
    clothing2.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/clothing/clothing2/clothing2-#{n+1}.png"), filename: "clothing2-#{n+1}.png")
end

clothing2.save!



clothing3= Product.new(
    description: "Details

    Suit up this spring & summer with this retro suit set composed of a suit jacket and a wrap skort with a semi-elasticated waist.Lined with breathable silk & cotton blend to ensure maximum comfort. Lead-time is 18 days.
    
    Simone Blouse,Tomi Dress
    
    Color/Couleur: sand/tan (Please refer to the fabric swatch and convo us for stock availability)
    
    Material/Composition:80% rayon + 20% wool (lining: silk/cotton blend)
    
    Size/Taille:Made-to-measure. Please provide bust,waist,hips size and height during check-out. Note that waist is measured at the thinnest point whereas hips and bust are measured at the widest point.
    ",
    price: 14500,
    name: "Soho suit set - 2 piece jacket wrap skort set in light khaki (more colours available)",
    seller: demo_user,
    category: clothing_shoes
)
5.times do |n|
    clothing3.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/clothing/clothing3/clothing3-#{n+1}.png"), filename: "clothing3-#{n+1}.png")
end

clothing3.save!

clothing4= Product.new(
    description: "Details


    *Twisted-detailing on the back
    *Front and back V-neck design
    *front slit pockets
    *beautiful drapes on the side of the dress
    *fully-lined
    
    *Lead-time is 18 days, excluding int’l shipping timeframe
    
    Color/Couleur: model is seen wearing diamond white(Please convo for more colour options.)
    
    Material/Composition:100% tencel (lining:silk/cotton)
    Size/Taille:Made to measure. Customer will need to provide shoulder width, bust/waist/hip measurement and height details during checkout.Waist measurement is taken at the thinnest part whereas hip/bust measurement is taken at the fullest/widest part
    ",
    price: 20500,
    name: "Tencel v-neck dress with back twist detailing",
    seller: demo_user,
    category: clothing_shoes
)
4.times do |n|
    clothing4.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/clothing/clothing4/clothing4-#{n+1}.png"), filename: "clothing4-#{n+1}.png")
end

clothing4.save!


clothing5= Product.new(
    description: "Details

    Made from lightweight cashmere/ cotton blend, this minimalist dress is perfect for the warmer months ahead. Featuring dropped shoulder seams and short sleeves. Relaxed- fit. Perfect for transitional months.
    
    Lead-time is 18 days.
    
    Color/Couleur: Mid-grey( please convo for more options.)
    
    
    Material/Composition: 70% cashmere 30 % cotton
    
    Size/Taille: S/M/L
    ",
    price: 20500,
    name: "Andrea Dress",
    seller: demo_user,
    category: clothing_shoes
)
6.times do |n|
    clothing5.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/clothing/clothing5/clothing5-#{n+1}.png"), filename: "clothing5-#{n+1}.png")
end

clothing5.save!


clothing6= Product.new(
    description: "Details

    *Relaxed rolled neck design
    *Center back zip closure
    *Can be worn as a dress or as a long vest top
    *Midi-length
    *Lead-time is 18 days, excluding int’l shipping timeframe
    
    worn with:Maud Jacket
    
    Color/Couleur:Beige(Other colours are available, please refer to the fabric swatch on our website)
    ",
    price: 28000,
    name: "Neutral dress - vintage-inspired sleeveless rolled neck cashmere knit dress/long vest top (new batch)",
    seller: demo_user,
    category: clothing_shoes
)
4.times do |n|
    clothing6.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/clothing/clothing6/clothing6-#{n+1}.png"), filename: "clothing6-#{n+1}.png")
end

clothing6.save!


party1= Product.new(
    description: "Contemporary style confectionery individually wrapped with a stylish heart design for romantic occasions.

    Storage: Store in a cool, dry place away from direct sunlight
    Country of Origin: UK
    Manufacturers Address: Italian Options, Unit 8 Stretton Business Park 1, Brunel Drive, Stretton, Burton-on-Trent. DE13 0BY
    INGREDIENTS: Sugar, Cocoa Butter, Whole Milk Powder, Cocoa Mass, Lactose (Milk), Whey Powder (Milk), Emulsifier: Soya Lecithin. Cocoa Solids: 32% minimum. Milk Solids 14% minimum. Also contains traces of Nuts. Nutritional Information - Typical values per 100g; Energy: 2290kJ/547kcal; Fat: 31.4g; of which Saturates: 17.8g; Carbohydrate: 59.3g; of which Sugars: 53.4g; Fibre: 1.8g; Protein: 5g; Salt: 0.1g.
    
    ALLERGY ADVICE: For allergens see ingredients in bold.
    
    *Ingredients are subject to change, always check the packaging
    
    All other decorations are for photo purpose only.
    
    ",
    price: 524,
    name: "Thank You Gold Heart Chocolates Italian Wedding favours Gifts Table Setting Treats Bachelorette sweets Hen Party Romantic Valentines boho",
    seller: demo_user,
    category: wedding_party
)
6.times do |n|
    party1.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/party/party1/party1-#{n+1}.png"), filename: "party1-#{n+1}.png")
end

party1.save!


party4= Product.new(
    description: "Personalized bridesmaid proposal candles make a perfect gift for inviting your friends and loved ones to be your bridesmaids and thank them for being there for you. This bridesmaid gift also makes a great addition to your proposal box.

    Our candles are made in Arts District of Los Angeles. We use natural coconut wax blend, lead-free cotton wicks, and premium fragrance oils infused with essential oils. They are 100% Vegan, Phthalate Free, Toxin Free, and Paraben Free.
    
    ",
    price: 699,
    name: "Bridesmaid Candle, Bridesmaid Gifts, I Can't Say I Do Without You, Bridesmaid Proposal, Will You Be My Bridesmaid Candle Gifts Proposals W6",
    seller: demo_user,
    category: wedding_party
)
4.times do |n|
    party4.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/party/party4/party4-#{n+1}.png"), filename: "party4-#{n+1}.png")
end

party4.save!


party2= Product.new(
    description: "Materials: 110lbs White cardstock paper, hand dyed silk ribbon, sold as a set or separate.

    Size: A2 (4.25inches x 5.5inches)
    
    We strive to make our colors as accurate as possible, but please bear in mind that photo may slightly different from actual item in terms of color due to the lighting during photo shooting or the monitor's display.
    
    Delivery time is an estimate and not a guarantee so please make sure you order at least 2 weeks prior to the event.
    
    ",
    price: 2000,
    name: "Wedding Vow Books, Custom Made Vow Booklet, Vows, Hand Torn, Personalized Vows, Hand Dyed Silk Ribbon, Bridal Gift, Engaged, Calligraphy",
    seller: demo_user,
    category: wedding_party
)
6.times do |n|
    party2.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/party/party2/party2-#{n+1}.png"), filename: "party2-#{n+1}.png")
end

party2.save!

party3= Product.new(
    description: "Hand dyed silk ribbon on spool (You can find different color options from the drop down list.)

    • 100% silk (Habotai silk)
    • Seamless
    • Soft feathered edges
    • Smooth, delicate, flows beautifully
    • Light and very nice to touch
    • Good for gift wrapping, packaging and other projects.
    
    
    Ribbon size
    WIDTH: approx. 1 inch (approx. 2.5 cm)
    LENGTH: approx. 5 yards (approx. 455 cm)
    
    
    We strive to make our colors as accurate as possible, but please bear in mind that photo may slightly different from actual item in terms of color due to the lighting during photo shooting or the monitor's display.
    
    Delivery time is an estimate and not a guarantee so please make sure you order at least 4 weeks prior to the event.
    
    
    ",
    price: 800,
    name: "Hand Dyed Silk Ribbon - 1 inch x 5 yards - 100% silk - Wedding Decor Ribbon - Gift favors wrap - Many Colors - Silk Ribbon on Wood Spool",
    seller: demo_user,
    category: wedding_party
)
6.times do |n|
    party3.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/party/party3/party3-#{n+1}.png"), filename: "party3-#{n+1}.png")
end

party3.save!


party5= Product.new(
    description: "Over 40,000 sales, over 6,000 5 star reviews. We’re one of Etsy’s biggest wedding brands.

    Regency Floral Wedding Guest Book.
    
    Make the memories of your big day even more special with our Regency Floral Wedding Guest Book. The illustration features an array greenery with lovely lilac, blue and peach flowers that curve up each side of the cover. Tying all of your wedding styling together, the hardback cover also features the couple’s names and wedding details before opening onto crisp luxe paper.
    
    One of the most valuable keepsakes from your wedding day is without doubt the wedding guest book. With all that's going on, it can sometimes be difficult to spend enough time with each of your wedding guests, so having a guest book can give your friends and family a chance to congratulate, wish you well and share treasured memories on your special day.
    
    Our premium books are filled with 80 pages (40 sheets) of luxuriously thick 180gsm white paper. The hardback front and back covers are matt laminated for a smooth finish with your chosen design expertly printed onto the cover. The book is finished with a bronzed wire for a luxe look.
    
    Size:
    A4 - 210 x 297 mm (large)
    A5 - 148 x 210 mm (small)
    ",
    price: 4148,
    name: "Regency Floral Wedding Guest Book",
    seller: demo_user,
    category: wedding_party
)
3.times do |n|
    party5.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/party/party5/party5-#{n+1}.png"), filename: "party5-#{n+1}.png")
end

party5.save!


party6= Product.new(
    description: "NCLUDES ONE CHAMPAGNE FLUTE
    SELECT DESIRED COLOR SCHEME, PERSONALIZATION, & QUANTITY AT CHECKOUT
    ---------------------------------------------
    ITEM DETAILS:
    ---------------------------------------------
    • 6 fl oz. capacity
    • Material: Glass
    • Individually personalized using high quality, permanent, 'outdoor grade' adhesive vinyl
    • Optional luxurious satin bow tied to the stem of each flute
    
    ",
    price: 1020,
    name: "Personalized Glass Champagne Flutes | Custom Birthday Gift | Bachelorette Party Favor | Bridal Shower Wine Glass | Mother's Day | Bridesmaid",
    seller: demo_user,
    category: wedding_party
)
3.times do |n|
    party6.photos.attach(io: URI.open("https://shoppy-s3-seeds.s3.amazonaws.com/AWS/party/party6/party6-#{n+1}.png"), filename: "party6-#{n+1}.png")
end

party6.save!





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

3.times do
        review = Review.new(body: Faker::Quote.matz)
        review.user = User.first
        review.rating = 4
        review.product = art1
        review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 5
    review.product = art2
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 5
    review.product = holiday2
    review.save!
end

3.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 4
    review.product = holiday8
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 3
    review.product = holiday5
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 5
    review.product = holiday6
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 3
    review.product = clothing3
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 5
    review.product =clothing5
    review.save!
end

3.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 4
    review.product = clothing1
    review.save!
end

3.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 4
    review.product = clothing2
    review.save!
end

3.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 4
    review.product = party1
    review.save!
end

3.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 4
    review.product = party2
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 5
    review.product = party3
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 3
    review.product = party4
    review.save!
end

2.times do
    review = Review.new(body: Faker::Quote.matz)
    review.user = User.first
    review.rating = 3
    review.product = party5
    review.save!
end

puts 'done'

