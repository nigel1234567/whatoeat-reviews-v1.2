class PlaceSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image_url, :location, :tags, :slug

  has_many :visits
end
