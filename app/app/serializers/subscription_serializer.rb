class SubscriptionSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :link, :recurring_date, :price, :subscriber_id, :email
  belongs_to :subscriber
end