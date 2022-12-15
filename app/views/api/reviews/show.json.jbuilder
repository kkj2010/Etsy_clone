
json.extract! @review, :id, :body, :rating

json.user do 
    json.id @review.user_id
    json.first_name @review.user.first_name
end

json.product reviews.product_id