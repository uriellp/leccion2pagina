class CreateEjercicio1s < ActiveRecord::Migration
  def change
    create_table :ejercicio1s do |t|
      t.string :nom
      t.ent :id

      t.timestamps
    end
  end
end
