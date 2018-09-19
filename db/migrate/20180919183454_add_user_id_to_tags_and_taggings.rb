class AddUserIdToTagsAndTaggings < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :user_id, :integer, null: false  
    add_column :taggings, :user_id, :integer, null: false
    
    add_index :tags, :user_id
    add_index :taggings, :user_id
  end
end
