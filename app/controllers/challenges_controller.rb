class ChallengesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        challenges = Challenge.all
        render json: challenges, status: :ok
    end
end
