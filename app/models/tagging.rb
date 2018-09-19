# == Schema Information
#
# Table name: taggings
#
#  id         :bigint(8)        not null, primary key
#  tag_id     :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Tagging < ApplicationRecord
  validates :tag_id, :note_id, :user_id, presence:true

  belongs_to :note
  belongs_to :tag
  belongs_to :user
end

