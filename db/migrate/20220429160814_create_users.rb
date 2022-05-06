class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :profile_pic
      t.integer :followers, default: 0

      t.timestamps
    end
  end
end
