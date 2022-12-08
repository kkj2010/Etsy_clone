@allProducts.each do |product|
    json.set! product.id do 
        json.extract! @category, :category_name
        json.extract! product, :id, :product_name, :price, :description
        json.extract! product.seller, :first_name   
    end
end