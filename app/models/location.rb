class Location < ApplicationRecord
  belongs_to :trip
  has_many :addresses, dependent: :destroy
  validates :street_address, presence: true
end
