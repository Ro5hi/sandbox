class SubscribersController < ApplicationController

    before_action :set_subber, only: [:show]

    def index
        @subscribers = Subscriber.all
        render json: @subscribers
    end 

    def show
        render json: @subscriber
    end

    def create
        @subscriber = Subscriber.new(subber_params)
        @subscriber.save
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
        params.permit(:name, :email)
    end

    def set_subber
        @subscriber = Subscriber.find_by(id: params[:id])
    end 


end 