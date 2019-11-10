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

end
