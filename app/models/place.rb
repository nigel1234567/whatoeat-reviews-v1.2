class Place < ApplicationRecord
  has_many :visits

  before_create :slugify

  validates :name, presence: true, uniqueness: true

  def slugify
    self.slug = name.parameterize
  end
end