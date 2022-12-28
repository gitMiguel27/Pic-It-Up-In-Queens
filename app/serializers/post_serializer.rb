class PostSerializer < ActiveModel::Serializer
  attributes :image, :date, :id
  has_one :user
  has_one :challenge
end
