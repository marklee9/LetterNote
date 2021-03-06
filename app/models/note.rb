# == Schema Information
#
# Table name: notes
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  body        :text
#  author_id   :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
  validates :title, :author_id, :notebook_id, presence:true;

  include ActionView::Helpers::DateHelper

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :notebook

  has_many :taggings,
  dependent: :destroy

  def updated
    time_ago_in_words(self.updated_at)
  end
end
