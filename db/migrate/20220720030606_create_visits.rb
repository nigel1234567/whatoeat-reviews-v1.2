class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.string :place_name
      t.string :place_location
      t.string :tags
      t.datetime :datetime

      t.timestamps
    end
  end
end
