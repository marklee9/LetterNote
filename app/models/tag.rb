# == Schema Information
#
# Table name: tags
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#

class Tag < ApplicationRecord
  validates :name, :user_id, presence:true

  belongs_to :user

  has_many :taggings,
  dependent: :destroy

  has_many :notes,
    through: :taggings,
    source: :note
end
