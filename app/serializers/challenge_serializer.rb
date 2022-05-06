class ChallengeSerializer < ActiveModel::Serializer
  attributes :id, :image, :location, :latitude, :longitude, :hint, :difficulty
end
