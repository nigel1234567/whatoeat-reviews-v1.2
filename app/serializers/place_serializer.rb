class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :location, :tags, :slug, :total_visits, :visitors

  has_many :visits
end
