class UserInfo < ApplicationRecord
  def change
    create_table :user_infos do |t|
      t.text :text
      t.references :user, foreign_key: true
    end
  end
end
