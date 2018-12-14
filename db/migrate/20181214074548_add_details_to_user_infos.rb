class AddDetailsToUserInfos < ActiveRecord::Migration[5.0]
  def change
    add_reference :user_infos, :user, foreign_key: true
    add_column :user_infos, :profile_text, :text
  end
end
