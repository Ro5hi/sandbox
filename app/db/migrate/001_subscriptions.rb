class Subscriptions < ActiveRecord::Migration[6.0]
    def change
      create_table :subscriptions do |t|
        t.string :category
        t.string :name
        t.string :link
        t.string :recurring_date
        t.integer :price
        t.integer :subscriber_id
    end 
  end 
end 