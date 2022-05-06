class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :password, :profile_pic, :followers
end
