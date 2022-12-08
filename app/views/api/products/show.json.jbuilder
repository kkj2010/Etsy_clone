json.extract! @product, :id, :name, :price, :seller_id, :description
json.partial! "api/users/user", user: @product.seller
