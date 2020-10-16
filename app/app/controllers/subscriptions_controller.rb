class SubscriptionsController < ApplicationController

    def index
        @subscriptions = Subscription.all
        render json: @subscriptions
    end 

    def show
        @subscription = Subscription.all
        render json: @subscription
    end 

    def create
        @subscription = Subscription.new(sub_params)
        @subscription.save
        render json: @subscription
    end

    def destroy
        @subscription = Subscription.find_by(params[:id])
        @subscription.destroy
    end 

    private 

    def sub_params 
        params.require(:subscription).permit(:category, :name, :link, :recurring_date, :price, :id, :subscriber_id)
    end

end