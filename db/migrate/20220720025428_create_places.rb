class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :name
      t.string :image_url
      t.string :location
      t.string :tags
      t.string :slug

      t.timestamps
    end
  end
end
