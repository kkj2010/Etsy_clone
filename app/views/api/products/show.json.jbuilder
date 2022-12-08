json.extract! @product, :id, :name, :price, :seller_id, :description

json.seller do 
    json.partial! "api/users/user", user: @product.seller
end
