@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :description, :name, :price, :seller_id
        json.photo product.photo.url
        json.seller do 
            json.partial! "api/users/user", user: product.seller
        end

        json.category do
            json.partial! "api/category/category" , category: product.category
        end
    end
end