require 'pry'
class ProjectsController < ApplicationController
    def index
        project = Project.all
        options = {
            include: [:equipment,:'equipment.make']
        }
        render json: ProjectSerializer.new(project,options)
    end


    def show 
        project= Project.find(params[:id])
        options = {
            include: [:equipment]
        }
        render json: ProjectSerializer.new(Project,options)
    end

end
