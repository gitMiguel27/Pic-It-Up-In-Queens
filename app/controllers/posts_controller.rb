class PostsController < ApplicationController

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
      params.permit(:image, :date, :latitude, :longitude, :user_id, :challenge_id, images: [])
    end
end
