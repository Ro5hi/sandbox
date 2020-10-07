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
    end 

    def destroy
    end

    private

    def subber_params
        params.permit(:name, :email, :id)
    end

end 