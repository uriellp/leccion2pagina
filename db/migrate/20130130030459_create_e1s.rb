class CreateE1s < ActiveRecord::Migration
  def change
    create_table :e1s do |t|
      t.integer :id
      t.string :nom

      t.timestamps
    end
  end
end
