@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :description, :name, :price, :seller_id, :rating
        json.photos product.photos, :url
        json.seller do 
            json.partial! "api/users/user", user: product.seller
        end

        json.category do
            json.partial! "api/category/category" , category: product.category
        end
    end
end

# {
#     id: 3,
#     description: 'hello',
#     name: 'a'
#     seller: "k=unuu",
#     rating: 4,
#     category: {
  #      id: 1,
   #     name: 'jewelry'
#}
# }

# json.id product.id
# json.description product.description
# json.name product.name
# json.seller_id product.seller_id