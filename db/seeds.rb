# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

places = Place.create ([
  {
    name: "Spicy Mala Place",
    location: "123 Avenue",
    tags: "mala, spicy, salty",
  },

  {
    name: "Chicken Rice Empire",
    location: "321 Road",
    tags: "chicken, tasty, chilli",
  }
])