class PokemonController < ApplicationController

    def index
        @all_pokemon = Pokemon.all
        render json: @all_pokemon
    end

    def show
        @pokemon = find_pokemon
        render json: @pokemon
    end

    def update
        @pokemon.update(pokemon_params)
        if @pokemon.save
          render json: @pokemon, status: :accepted
        else
          render json: { errors: @pokemon.errors.full_messages }, status: :unprocessible_entity
        end
      end

    private
 
    def pokemon_params
        params.permit(:name) #might have to change these values based on what you want passed in
    end
    
    def find_pokemon
        @pokemon = Pokemon.find(params[:id])
    end
    
end
