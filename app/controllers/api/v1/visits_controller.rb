module Api
  module V1
    class VisitsController < ApplicationController
      protect_from_forgery with: :null_session
      before_action :authenticate_user!

      def index
        visits = current_user.visits

        # Pass as json to api
        render json: VisitSerializer.new(visits).serialized_json
      end

      def show
        # Find existing place by slug
        visit = Visit.find_by(id: params[:id])

        # Pass as json to api
        render json: VisitSerializer.new(visit).serialized_json
      end

      def create
        def find_place(name)
          Place.find_by(name)
        end
    
        # If Place ID not available
        if visit_params[:place_id].nil?
          # If Place does not exist in database, create it
          if find_place(name: visit_params[:place_name]).nil?
            Place.create(name: visit_params[:place_name], location: visit_params[:place_location], tags: visit_params[:tags])
          end
        end

        # Create Place Id
        place_id = find_place(name: visit_params[:place_name]).id
        @place ||= Place.find(params[:place_id])

        @visits = Visit.all
        visit = current_user.visits.build(place_id: place_id, place_name: visit_params[:place_name], place_location: visit_params[:place_location],
                          tags: visit_params[:tags], datetime: visit_params[:datetime], user_id: visit_params[:user_id], recommendation: visit_params[:recommendation])

        # If able to save and everything is valid, save as json
        if visit.save
          render json: VisitSerializer.new(visit).serialized_json
        else # Else render error
          render json: {error: visit.errors.messages}, status: 422
        end
      end

      def update
        # Find existing visit
        visit = Visit.find_by(id: params[:id])

        # If able to update, save as json
        if visit.update(visit_params)
          render json: VisitSerializer.new(visit).serialized_json
        else # Else render error
          render json: {error: visit.errors.messages}, status: 422
        end
      end

      def destroy
        # Find existing visit by id
        visit = Visit.find(params[:id])

        # If able to destroy, no content
        if visit.destroy
          head :no_content
        else # Else render error
          render json: {error: visit.errors.messages}, status: 422
        end
      end

      private

      def visit_params
        params.require(:visit).permit(:place_name, :place_location, :tags, :datetime, :user_id, :recommendation)
      end

      def options
        
      end

    end
  end
end