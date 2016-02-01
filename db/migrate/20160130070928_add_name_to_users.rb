class AddNameToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :first_name, :last_name  #adds string column for first name and last name
    end
  end
end
