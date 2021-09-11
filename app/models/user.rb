class User < ApplicationRecord
  has_many :trips, dependent: :destroy
  validates :name, :email, :password, presence: true
end
