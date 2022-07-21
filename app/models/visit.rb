class Visit < ApplicationRecord
  belongs_to :place

  validates :place_name, presence: true
  validates :place_location, presence: true
end
