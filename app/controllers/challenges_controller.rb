class ChallengesController < ApplicationController

    def index
        challenges = Challenge.all
        render json: challenges, status: :ok
    end
end
