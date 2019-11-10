class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :duration
end
