class VisitSerializer
  include FastJsonapi::ObjectSerializer
  attributes :place_name, :place_location, :tags, :datetime, :user_id
end
