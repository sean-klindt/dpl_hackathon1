class Address < ApplicationRecord
  belongs_to :location
  validates :street_address, presence: true
end
