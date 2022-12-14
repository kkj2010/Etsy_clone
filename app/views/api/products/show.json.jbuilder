json.extract! @product, :id, :name, :price, :description, :rating
json.photos @product.photos, :url
json.seller do
    json.partial! "api/users/user", user: @product.seller
end
json.category do
    json.extract! @product.category, :id, :name, :label
end
    
json.reviews @product.reviews.order(created_at: :desc) do |review|
    json.id review.id
    json.created_at review.created_at
    json.product_id review.product_id
    json.body review.body
    json.rating review.rating
    json.user do
        json.id review.user_id
        json.first_name review.user.first_name
    end
end

# {
#     id: 1
#     seller:{
#         id:
#     }
#     reviews: [{id: 5, body: dlfkj, user:{
#         id:4
#     }}, {}, {}]
# }