
class Post < ApplicationRecord
    
    has_one_attached :photo,
    dependent: :destroy
    #has_many_attached :photos
  end