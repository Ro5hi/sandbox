class Subscribers < ActiveRecord::Migration[6.0]
    def change
      create_table :subscribers do |t|
        t.string :name
        t.string :email, null: false, default: ""
        t.timestamps null: false 
    end
  end
end