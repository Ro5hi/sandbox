class SubscriptionsController < ApplicationController

    def index
        @subscriptions = Subscription.all 
        render json: @subscriptions, include: :user
    end 

    def new
        @subscription = Subscription.new
        render json: @subscription
    end 

    def create
        @subscription = User.subscriptions.build(sub_params)
        render json: @subscription if @subscription.save
    end 

    def update
        @subscription.update(sub_params)
        if @subscription.save
          render json: @subscription, status: 200
        else
          render json: { errors: @subscription.errors.full_messages }, status: :unprocessible_entity
        end
      end

    def destroy
        @subscription = Subscription.find_by(id: params[:id])
        @subscription.destroy
        respond_to do |format|
            format.html { redirect_to index, notice: 'Subscription removed.'}
    end 

    private

    def sub_params
        params.permitparams.permit(:name, :category, :price, :user_id)
    end 


end 