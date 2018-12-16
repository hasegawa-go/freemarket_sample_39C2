class Item < ApplicationRecord
	belongs_to :seller, class_name: "User"
	belongs_to :buyer, class_name: "User", optional: true

	validates :name, :description, :condition, :price, presence: true
end

