class Post < ApplicationRecord
  belongs_to :user
  belongs_to :challenge

  validate :challenge_latitude_comparison, :on => :create
  validate :challenge_longitude_comparison, :on => :create

  def challenge_latitude_comparison
    if self.challenge.latitude - self.latitude > 50 ||  self.challenge.latitude - self.latitude < -50
      errors.add("You weren't close enough to fulfill challenge requirements. Try Again.")
    end
  end

  def challenge_longitude_comparison
    if self.challenge.longitude - self.longitude > 50 ||  self.challenge.longitude - self.longitude < -50
      errors.add("You weren't close enough to fulfill challenge requirements. Try Again.")
    end
  end

end
