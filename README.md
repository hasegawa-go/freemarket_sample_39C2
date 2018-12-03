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



## credit_card-table
|Column|Type|Options|
|------|----|-------|
|card_number|integer|unique: true, null: false|
|expire_date|nteger|null: false|
|security_code|integer|null: false|
|user_id|references|null: false,foreign_key: true|

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



## items-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|price|integer|null: false|
|description|text||
|size|string||
|condition|string|null: false|
|shipping_fee|string|null: false|
|shipping_method|string|null: false|
|shipping_region|string|null: false|
|shipping_schedule|string|null: false|
|saler_id|references|foreign_key: true|
|buyer_id|references|foreign_key: true|
|category_id|references|foreign_key: true|
|exhibition_status|string|null: false|

### Association
- belongs_to :user
- has_one :brand, dependent: :destroy
- has_many :category, dependent: :destroy
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



## brands-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|item_id|references|null: false,foreign_key: true|

### Association
- belongs_to :item


## category_top-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|item_id|references|null: false,foreign_key: true|

### Association
- belongs_to :item
- has_many :category_mids


## category_mid-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|item_id|references|null: false,foreign_key: true|
|categort_top_id|references|null: false,foreign_key: true|

### Association
- belongs_to :item
- belongs_to :category_top
- has_many :category_bottoms



## category_bottom-table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|item_id|references|null: false,foreign_key: true|
|category_mid_id|references|null: false,foreign_key: true|

### Association
- belongs_to :item
- belongs_to :category_mid



## images-table
|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|item_id|references|null: false,foreign_key: true|

### Association
- belongs_to :item



### sns_credential-table
|Column|Type|Options|
|------|----|-------|
|uid|string|null: false,unique: true|
|provider|string|null: false|
|user_id|references|null: false, foreign_key: true|

### Association
- belongs_to :user


