class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string    	:name,              null: false
      t.integer   	:price
      t.text      	:description
      t.string    	:condition
      t.string    	:status
      t.references  :seller
      t.references  :buyer
      t.references  :bottom_category
      t.references  :brand
      t.references  :size
      t.timestamps
    end
  end
end