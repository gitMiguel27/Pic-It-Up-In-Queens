class Posts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :image, default: "https://media.wired.com/photos/624396fa9461c8562e44fdb2/master/pass/Stop-Doomscrolling-Gear-1300226705.jpg"
      t.date :date
      t.integer :latitude
      t.integer :longitude
      t.belongs_to :user, foreign_key: true
      t.belongs_to :challenge, foreign_key: true

      t.timestamps
    end
  end
end