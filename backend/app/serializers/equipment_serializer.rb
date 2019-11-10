class EquipmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :make, :model, :rent, :project_id
  
end

