## users-table
|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, maximam_length: 20|
|e_mail|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_one :credit_card, dependent: :destroy
- has_one :user_info, dependent: :destroy
- has_many :sns_credentials, dependent: :destroy
- has_many :items, dependent: :destroy
- has_many :likes, dependent: :destroy
- has_many :comments, dependent: :destroy
- has_many :user_reviews, dependent: :destroy



## credit_card-table
|Column|Type|Options|
|------|----|-------|
|card_number|integer|unique: true, null: false|
|expire_date|nteger|null: false|
|security_code|integer|null: false|
|user_id|references|null: false,foreign_key: true|

### Association
- belongs_to :user



### sns_credential-table
|Column|Type|Options|
|------|----|-------|
|uid|string|null: false,unique: true|
|provider|string|null: false|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user



## user_reviews-table
|Column|Type|Options|
|------|----|-------|
|buyer_id|references|null: false,foreign_key: true|
|seller_id|references|null: false,foreign_key: true|
|review|integer|null: false|

### Association
- belongs_to :user



## users_info-table
|Column|Type|Options|
|------|----|-------|
|family_name|string|null: false|
|first_name|string|null: false|
|kana_family_name|string|null: false|
|kana_first_name|string|null: false|
|postal_code|integer(7)|null: false|
|prefecture|string|null: false|
|city|string|null: false|
|addless|string|null: false|
|building_name|string||
|phone_number|integer||
|birth_date|integer||
|avatar|string||
|profile_text|string||
|user_id|referencess|null: false,foreign_key: true|

### Association
- belongs_to :user



## items-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|description|text||
|condition|string|null: false|
|exhibition_status|string|null: false|
|shipping_fee|string|null: false|
|shipping_method|string|null: false|
|shipping_region|string|null: false|
|shipping_schedule|string|null: false|
|seller_id|references|foreign_key: true|
|buyer_id|references|foreign_key: true|
|bottom_category_id|references|foreign_key: true|
|brand_id|references|foreign_key: true|
|size_id|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :brand
- belongs_to :bottom_category
- belongs_to :size
- has_many :image, dependent: :destroy
- has_many :likes, dependent: :destroy
- has_many :comments, dependent: :destroy



## likes-table
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false,foreign_key: true|
|item_id|references|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :item



## comments-table
|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|user_id|references|null: false,foreign_key: true|
|item_id|references|null: false,foreign_key: true|
|datetime|string||

### Association
- belongs_to :user
- belongs_to :item



## images-table
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|item_id|references|null: false,foreign_key: true|

### Association
- belongs_to :item



## brands-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :items



## sizes-table
|Column|Type|Options|
|------|----|-------|
|size|string||

### Association
- has_many :items



## bottom_categories-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mid_caregory_id|references|null: false,foreign_key: true|

### Association
- has_many :items
- belongs_to :mid_category



## mid_categories-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|top_categories_id|references|null: false,foreign_key: true|

### Association
- belongs_to :top_category
- has_many :bottoms_categories



## top_categories-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :mid_categories




