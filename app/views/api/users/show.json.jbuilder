json.user do
    json.extract! @user, :id, :email, :firstname, :created_at
end