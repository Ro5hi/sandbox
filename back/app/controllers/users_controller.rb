class UsersController < ApplicationController

    private 

    def signup_params
        params.require(:user).permit(:email, :password)
    end

    def update_params
        params.require(:user).permit(:email, :password)
    end 

end 