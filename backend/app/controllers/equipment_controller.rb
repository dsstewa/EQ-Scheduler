class EquipmentController < ApplicationController

    def index
        equipment = Equipment.all
        render json: EquipmentSerializer.new(equipment)
    end


    def show 
        equipment = Equipment.find(params[:id])
        options = {
            include: [:project]
        }
        render json: EquipmentSerializer.new(equipment)
    end

    def create
        @equipment = Equipment.new(equipment_params)
        @equipment.save
        options = {
            include: [:equipment]
        }
        render json: EquipmentSerializer.new(@equipment)
        
    end


    def equipment_params
        params.require(:equipment).permit(:make, :model, :rent, :project_id)
     end

end
