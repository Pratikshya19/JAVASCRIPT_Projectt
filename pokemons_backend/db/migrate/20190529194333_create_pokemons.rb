class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :type_of
      t.string :description
      t.integer :trainer_id

      t.timestamps
    end
  end
end
