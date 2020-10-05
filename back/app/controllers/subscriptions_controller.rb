class SubscriptionsController

    def index
        @subscriptions = Subscription.all 
        render json: @subscriptions, include: :user
    end 

    def create
    end 

    def update
    end 

    def delete
    end 

end 