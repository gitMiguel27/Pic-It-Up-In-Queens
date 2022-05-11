class PostsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def create
        post = Post.create!(post_params)
        render json: post, status: :ok
    end

    private
    
    def post_params
      params.permit(:date, :latitude, :longitude, :user_id, :challenge_id)
    end
end
