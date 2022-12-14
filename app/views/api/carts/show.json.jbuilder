# @carts.each do |cart| 
#     json.set! cart.id do  
#         json.partial! '/api/carts/cart', cart: cart
#         json.extract! cart.product, :name, :price, :seller_id
#         json.extract! cart.product.seller, :first_name
#     end
# end'

# json.set! @cart.id do 
#     json.extract! @cart, :id
#     json.items @cart.cart_items
# end
json.extract! @cart, :id, :quantity

json.items do
    @cart.cart_items.each do |cart_item|
        json.set! cart_item.id do
            json.extract! cart_item, :id, :quantity
            json.product cart_item.product
            json.category cart_item.product.category
        end
    end
end
# json.items @cart.cart_items
    