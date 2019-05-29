class TrainerController < ApplicationController

    def index
        @all_trainer = Trainer.all
        render json: @all_trainer
    end

    def show
        @trainer = find_trainer
        render json: @trainer
    end

    def update
        @trainer.update(trainer_params)
        if @trainer.save
          render json: @trainer, status: :accepted
        else
          render json: { errors: @trainer.errors.full_messages }, status: :unprocessible_entity
        end
      end

    private
 
    def trainer_params
        params.permit(:name) #might have to change these values based on what you want passed in
    end
    
    def find_trainer
        @trainer = Trainer.find(params[:id])
    end
    
end
