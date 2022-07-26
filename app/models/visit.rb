class Visit < ApplicationRecord
  belongs_to :place
  belongs_to :user

  validates :place_name, presence: true
  validates :place_location, presence: true
end
