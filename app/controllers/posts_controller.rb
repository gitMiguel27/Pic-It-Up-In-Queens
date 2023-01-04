class PostsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    
    def index
        posts = Post.all.sort{ |a,b| b.date <=> a.date }
        render json: posts, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    def user_posts
        user_posts = Post.select{ |p| p.user.username === params[:username] }
        render json: user_posts, status: :ok
    end

    private
    
    def post_params
      params.permit(:date, :latitude, :longitude, :user_id, :challenge_id)
    end
end
