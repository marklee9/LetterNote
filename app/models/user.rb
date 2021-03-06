# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, presence:true, uniqueness:true
  validates :password_digest, :session_token, presence:true
  validates :password, length: {minimum: 6, allow_nil:true}

  has_many :tags,
    foreign_key: :user_id,
    class_name: :Tag

  has_many :taggings,
    foreign_key: :user_id,
    class_name: :Tagging

  has_many :notebooks,
    foreign_key: :author_id,
    class_name: :Notebook

  has_many :notes,
    foreign_key: :author_id,
    class_name: :Note

  after_initialize :ensure_session_token
  attr_reader :password

  # user can log in with either username or email.
  def self.find_by_credentials(input, password)
    if input.include?('@')
      user = User.find_by(email: input)
    else 
      user = User.find_by(username: input)
    end
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end

