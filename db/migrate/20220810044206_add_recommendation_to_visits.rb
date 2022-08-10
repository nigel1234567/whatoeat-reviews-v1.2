class AddRecommendationToVisits < ActiveRecord::Migration[7.0]
  def change
    add_column :visits, :recommendation, :string
  end
end
