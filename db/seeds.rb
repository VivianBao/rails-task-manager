# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Cleaning up..."
Task.destroy_all

Task.create!(
  title: "Grocery shopping",
  details: "Buy eggs, ham, and bread"
)

Task.create!(
  title: "Wash dishes",
  details: "Clean the sink after!"
)

puts "#{Task.all.length} tasks created!"
