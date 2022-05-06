class PostSerializer < ActiveModel::Serializer
  attributes :image, :date
  has_one :user
  has_one :challenge
end
