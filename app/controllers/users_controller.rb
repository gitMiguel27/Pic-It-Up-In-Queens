class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        users = User.all.sort{|a,b| b.points <=> a.points}
        render json: users, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
      render json: @current_user
    end

    def update
      user = User.find_by(username: params[:username])
      user.update!(points: params[:points])
      render json: user, status: :accepted
    end
    
    private
  
    def user_params
      params.permit(:full_name, :username, :email, :password, :profile_pic, :points)
    end
end
