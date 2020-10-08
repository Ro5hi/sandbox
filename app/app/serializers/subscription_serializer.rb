class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :link, :price, :subscriber_id 
  belongs_to :subscriber
end