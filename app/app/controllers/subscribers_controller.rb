class SubscribersController < ApplicationController

    def index
        @subscribers = Subscriber.all
        render json: @subscribers
    end 

    def create
        binding.pry
        render json: @subscriber
    end

    def new
        @subscriber = Subscriber.new
    end 

    def update
        @subscriber.update(subber_params)
        @subscriber.save
        render json: @subscriber
    end 

    def destroy
    end

    private

    def subber_params
        params.permit(:name, :email, :subscriber_id, :id)
    end

end 