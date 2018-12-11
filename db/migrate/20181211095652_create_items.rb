class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string    	:name,              null: false
      t.integer   	:price,				      null: false
      t.text      	:description,	     	null: false
      t.string    	:condition,		    	null: false
      t.string    	:status,			      null: false
      t.references  :seller,            foreign_key:true
      t.references  :buyer,             foreign_key:true
      t.references  :bottom_category,   foreign_key:true
      t.references  :brand,             foreign_key:true
      t.references  :size,              foreign_key:true
      t.timestamps
    end
  end
end