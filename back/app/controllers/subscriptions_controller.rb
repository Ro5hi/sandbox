class SubscriptionsController < ApplicationController

    def index
        @subscriptions = Subscription.all 
        render json: @subscriptions, include: :user
    end 

    def new
        @subscription = Subscription.new
    end 

    def create
        render json: @subscription if @subscription.save
    end 

    def update
    end 

    def destroy
        @subscription.destroy
        respond_to do |format|
            format.html { redirect_to index, notice: 'Subscription removed.'}
    end 

end 