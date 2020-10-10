class SubscriptionsController < ApplicationController

    def index
        @subscriptions = Subscription.all
        render json: @subscriptions
    end 

    def new
        @subscription = Subscription.new
    end

    def create
        @subscription = Subscription.new(sub_params)
        @subscription.save
        render json: @subscription
    end 

    def update
        @subscription.update(sub_params)
        @subscription.save
        render json: @subscription
    end 

    def destroy
        @subscription = Subscription.find_by(id: params[:id])
        @subscription.destroy
        render json: @subscription
    end 

    private 

    def sub_params 
        params.permit(:subscription, :name, :link, :category, :price, :id, :subscriber_id,)
    end

end