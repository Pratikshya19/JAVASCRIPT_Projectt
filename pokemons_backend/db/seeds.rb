# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Clear all tables
Trainer.destroy_all
Pokemon.destroy_all

# Create trainers
Trainer.create(name:"Vidhi", age:25)
Trainer.create(name:"Bruno", age:30)
Trainer.create(name:"Agatha", age:65)
Trainer.create(name:"Ash", age:10)

# Create Pokemon
Pokemon.create(name:"Bulbasaur", type_of:"Grass Poison",description:" ", trainer_id:1)
Pokemon.create(name:"Ivysaur", type_of:"Grass Poison",description:" ", trainer_id:2)
Pokemon.create(name:"Venasaur", type_of:"Grass Poison",description:" ", trainer_id:3)
Pokemon.create(name:"Charmander", type_of:"Fire",description:" ", trainer_id:4)
Pokemon.create(name:"Charmeleon", type_of:"Fire",description:" ", trainer_id:4)
Pokemon.create(name:"Charizard", type_of:"Fire",description:" ",trainer_id:2)
Pokemon.create(name:"Squirtle", type_of:"Water",description:" ", trainer_id:3)
Pokemon.create(name:"Wartortle", type_of:"Water",description:" ", trainer_id:2)
Pokemon.create(name:"Blastoise", type_of:"Water",description:" ", trainer_id:1)

# Confirmation
puts "Seed Complete"