# @carts.each do |cart| 
#     json.set! cart.id do  
#         json.partial! '/api/carts/cart', cart: cart
#         json.extract! cart.product, :name, :price, :seller_id
#         json.extract! cart.product.seller, :first_name
#     end
# end'

json.set! cart.id do 
    json.extract! cart, :id, :
end