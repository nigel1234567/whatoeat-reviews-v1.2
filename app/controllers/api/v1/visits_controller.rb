module Api
  module V1
    class VisitsController < ApplicationController
      protect_from_forgery with: :null_session
      # before_action :authenticate_user!

      def create
        def find_place(name)
          Place.find_by(name)
        end
    
        # If Place does not exist in database, create it
        if find_place(name: visit_params[:place_name]).nil?
          Place.create(name: visit_params[:place_name], location: visit_params[:place_location], tags: visit_params[:tags])
        end

        # Create Place Id
        place_id = find_place(name: visit_params[:place_name]).id

        visit = current_user.visits.build(place_id: place_id, place_name: visit_params[:place_name], place_location: visit_params[:place_location],
                          tags: visit_params[:tags], datetime: visit_params[:datetime], user_id: visit_params[:user_id])

        # If able to save and everything is valid, save as json
        if visit.save
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
          render json: {error: place.errors.messages}, status: 422
        end
      end

      private

      def visit_params
        params.require(:visit).permit(:place_name, :place_location, :tags, :datetime, :user_id)
      end
    end
  end
end