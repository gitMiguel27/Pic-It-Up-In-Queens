class Posts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :image
      t.date :date
      t.belongs_to :user, foreign_key: true
      t.belongs_to :challenge, foreign_key: true

      t.timestamps
    end
  end
end
