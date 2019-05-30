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
t1 = Trainer.create(name:"Vidhi", age:25)
t2 = Trainer.create(name:"Bruno", age:30)
t3 = Trainer.create(name:"Agatha", age:65)
t4 = Trainer.create(name:"Ash", age:10)

# Create Pokemon
Pokemon.create(name:"Bulbasaur", type_of:"Grass Poison",description:" ", trainer_id:t1.id)
Pokemon.create(name:"Ivysaur", type_of:"Grass Poison",description:" ", trainer_id: t1.id)
Pokemon.create(name:"Venasaur", type_of:"Grass Poison",description:" ", trainer_id: t3.id)
Pokemon.create(name:"Charmander", type_of:"Fire",description:" ", trainer_id: t2.id)
Pokemon.create(name:"Charmeleon", type_of:"Fire",description:" ", trainer_id: t3.id)
Pokemon.create(name:"Charizard", type_of:"Fire",description:" ",trainer_id:t4.id)
Pokemon.create(name:"Squirtle", type_of:"Water",description:" ", trainer_id: t3.id)
Pokemon.create(name:"Wartortle", type_of:"Water",description:" ", trainer_id: t2.id)
Pokemon.create(name:"Blastoise", type_of:"Water",description:" ", trainer_id: t4.id)

# Confirmation
puts "Seed Complete"