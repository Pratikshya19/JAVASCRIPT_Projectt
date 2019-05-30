class PokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :type_of, :description, :trainer_id
end
