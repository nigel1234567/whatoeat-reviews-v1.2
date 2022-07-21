module Api
  module V1
    class VisitsController < ApplicationController
      
      def create
        visit = Visit.new(visit_params)

        # If able to save and everything is valid, save as json
        if visit.save
          render json: VisitSerializer.new(visit).serialized_json
        else # Else render error
          render json: {error: visit.errors.messages}, status: 422
        end
      end

      def destroy
        # Find existing visit by id
        visit = Visit.find_by(params[:id])

        # If able to destroy, no content
        if review.destroy
          head :no_content
        else # Else render error
          render json: {error: place.errors.messages}, status: 422
        end
      end

      private

      def visit_params
        params.require(:visit).permit(:place_name, :place_location, :tags, :datetime, :place_id)
      end
    end
  end
end