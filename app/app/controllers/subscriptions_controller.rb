class SubscriptionsController < ApplicationController

    before_action :set_sub, only: [:show, :destroy]

    def index
        @subscriptions = Subscription.all
        render json: @subscriptions
    end 

    def show
        render json: @subscription
    end 

    def create
        @subscription = Subscription.new(sub_params)
        @subscription.save
        render json: @subscription
    end

    def destroy
        @subscription.destroy
    end 

    private 

    def sub_params 
        params.require(:subscription).permit(:category, :name, :link, :recurring_date, :price, :email, :id, :subscriber_id, :subscriber)
    end

    def set_sub
        @subscription = Subscription.find_by(id: params[:id])
    end 

end