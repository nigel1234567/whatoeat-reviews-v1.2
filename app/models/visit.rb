class Visit < ApplicationRecord
  belongs_to :place

  validates :name, presence: true
  validates :location, presence: true
end
