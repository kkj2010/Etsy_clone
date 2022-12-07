json.extract! @product, :id, :product_name, :price, :seller_id, :description

json.seller do 
    json.partial! "api/users/user", user: @product.seller
end
