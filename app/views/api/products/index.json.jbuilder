@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :description, :name, :price, :seller_id
       
        json.seller do 
            json.partial! "api/users/user", user: product.seller
        end

        json.producst do
            json.partial! "api/category/category" , category: product.category
        end
    end
end