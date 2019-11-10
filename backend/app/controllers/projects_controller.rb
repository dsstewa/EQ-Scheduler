class ProjectsController < ApplicationController
    def index
        project = Project.all
        render json: ProjectSerializer.new(project)
    end


    def show 
        project= Project.find(params[:id])
        options = {
            include: [:equipment]
        }
        render json: ProjectSerializer.new(Project)
    end

end
