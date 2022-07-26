class Place < ApplicationRecord
  has_many :visits
  has_many :users, through: :visits

  before_create :slugify

  validates :name, presence: true, uniqueness: true

  def slugify
    self.slug = name.parameterize
  end

  def total_visits
    visits.count
  end

  def visitors
    self.users.uniq.count
  end

  def recommends
    recommend_array = self.visits.select { |visit| visit.recommendation == 'y' }
    recommend_array.count
  end

end
