json.id @review.id
json.created_at @review.updated_at
json.product_id @review.product_id
json.body @review.body
json.rating @review.rating
json.user do
    json.id @review.user_id
    json.first_name @review.user.first_name
end