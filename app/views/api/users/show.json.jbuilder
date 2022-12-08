# json.user do
#     json.extract! @user, :id, :email, :first_name, :created_at
# end


json.user do
    json.partial! "api/users/user", user: @user
end