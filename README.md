## users-table
|Column|Type|Options|
|------|----|-------|
|nickname|strings|null: false, maximam_length: 20|
|e_mail|strings|null: false, unique: true|
|password|strings|null: false|
|family_name|strings|null: false|
|first_name|strings|null: false|
|kana_family_name|strings|null: false|
|kana_first_name|strings|null: false|
|postal_code|integer(7)|null: false|
|prefecture|strings|null: false|
|city|strings|null: false|
|addless|strings|null: false|
|building_name|strings||
|phone_number|integer||
|birth_year|integer||
|birth_month|integer||
|birth_day|integer||
|avatar|trings||
|profile_text|trings||

### Association
has_one :credit_card
has_many :items
has_many :likes
has_many :comments
has_many :user_reviews



## credit_card-table
|Column|Type|Options|
|------|----|-------|
|card_number|integer|unique: true, null: false|
|expire_month|nteger|null: false|
|expire_year|integer|null: false|
|security_code|integer|null: false|
|user|reference|foreign_key: true

### Association
belongs_to :user



##user_reviews-table
|Column|Type|Options|
|------|----|-------|
|user|reference|foreign_key: true|
|good|integer||
|normal|integer||
|bad|integer||

### Association
belongs_to :user



## items-table
|Column|Type|Options|
|------|----|-------|
|name|strings|null: false|
|category_1|strings|null: false|
|category_2|strings||
|category_3|strings||
|image_1|strings|null: false|
|image_2|strings||
|image_3|strings||
|image_4|strings||
|price|integer|null: false|
|description|text||
|size|strings||
|condition|strings|null: false|
|shipping_fee|strings|null: false|
|shipping_method|strings|null: false|
|shipping_region|strings|null: false|
|shipping_schedule|strings|null: false|
|saler_id|reference|foreign_key: true|
|buyer_id|reference|foreign_key: true|

### Association
belongs_to :user
belongs_to :brand
has_many :likes
has_many :comments



## likes-table
|Column|Type|Options|
|------|----|-------|
|user|reference|foreign_key: true|
|item|reference|foreign_key: true|

### Association
belongs_to :user
belongs_to :item



## comments-table
|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|user|reference|null: false, foreign_key: true|
|item|reference|null: false, foreign_key: true|
|time|strings||

### Association
belongs_to :user
belongs_to :item



## brand-table
|Column|Type|Options|
|------|----|-------|
|name|strings|null: false|

### Association
has_many :items


### sns_credential-table
### todo-tabele
### notification-tabele
### sales-tabele

