class CreateEquipment < ActiveRecord::Migration[5.2]
  def change
    create_table :equipment do |t|
      t.string :make
      t.string :model
      t.float :rent
      t.belongs_to :project
      t.timestamps
    end
  end
end
