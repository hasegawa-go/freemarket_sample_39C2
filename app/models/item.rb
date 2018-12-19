class Item < ApplicationRecord
	belongs_to :seller, class_name: "User"
	belongs_to :buyer, class_name: "User", optional: true

	has_many :images
	accepts_nested_attributes_for :images, allow_destroy: true

	validates :name, :description, :condition, :price, presence: true
end

