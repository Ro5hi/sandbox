class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :link, :recurring_date, :price, :subscriber_id 
  belongs_to :subscriber
end