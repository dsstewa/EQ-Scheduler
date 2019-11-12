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

    def new
        @project = Project.new
    end

    def create
        @project = Project.new(project_params)
        @project.save
        options = {
            include: [:equipment]
        }
        render json: ProjectSerializer.new(@project,options)
        
    end


    def project_params
        params.require(:project).permit(:name, :location, :duration)
     end


end
