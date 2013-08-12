class CreateEjer1s < ActiveRecord::Migration
  def change
    create_table :ejer1s do |t|
      t.ent :id
      t.string :nom

      t.timestamps
    end
  end
end
