class CreateChallenges < ActiveRecord::Migration[6.1]
  def change
    create_table :challenges do |t|
      t.string :image
      t.string :location
      t.integer :latitude
      t.integer :longitude
      t.string :hint
      t.integer :difficulty

      t.timestamps
    end
  end
end
