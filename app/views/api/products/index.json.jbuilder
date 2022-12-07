@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :description, :product_name, :price, :seller_id
       
        json.seller do 
            json.partial! "api/users/user", user: product.seller
        end

    end
end