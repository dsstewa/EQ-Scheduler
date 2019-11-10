class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :duration
  has_many :equipment
end
