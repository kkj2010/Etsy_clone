@allProducts.each do |product|
    json.set! product.id do 
        json.extract! @category, :name
        json.extract! product, :id, :name, :price, :description
        json.extract! product.seller, :first_name   
    end
end