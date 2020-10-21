class SubscriberSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :subscriptions
end
