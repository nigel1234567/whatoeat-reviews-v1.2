class AddPlaceIdToVisits < ActiveRecord::Migration[7.0]
  def change
    add_column :visits, :place_id, :integer
    add_index :visits, :place_id
  end
end
