json.extract! @product, :id, :name, :price, :description
json.photo @product.photo.url
json.seller do
    json.partial! "api/users/user", user: @product.seller
end
json.category do
    json.extract! @product.category, :id, :name, :label
end
    

