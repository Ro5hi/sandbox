class SubscriptionsController < ApplicationController

    def index
        @subscriptions = Subscription.all
    end 

    def new
        @subscription = Subscription.new
    end

    def create
        @subscription = Subscriber.subscriptions.build(sub_params)
        render json: @subscription
    end 

    def update
        @subscription.update(sub_paramas)
        if @subscription.save
            render json: @subscription
        else 
            render json: { errors: @subscription.errors}
        end
    end 

    def destroy
        @subscription = Subscription.find_by(id: params[:id])
        @subscription.destroy
        render json: @subscription
    end 

    private 

    def sub_params 
        params.permit(:name, :link, :category, :price)
    end

end