module Api
  module V1
    class PlacesController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        places = Place.all

        # Pass as json to api
        render json: PlaceSerializer.new(places, options).serialized_json
      end

      def show
        # Find existing place by slug
        place = Place.find_by(slug: params[:slug])

        # Pass as json to api
        render json: PlaceSerializer.new(place, options).serialized_json
      end

      def create
        place = Place.new(place_params)

        # If able to save and everything is valid, save as json
        if place.save
          render json: PlaceSerializer.new(place).serialized_json
        else # Else render error
          render json: {error: place.errors.messages}, status: 422
        end
      end

      def update
        # Find existing place by slug
        place = Place.find_by(slug: params[:slug])

        # If able to update, save as json
        if place.update(place_params)
          render json: PlaceSerializer.new(place, options).serialized_json
        else # Else render error
          render json: {error: place.errors.messages}, status: 422
        end
      end

      def destroy
        # Find existing place by slug
        place = Place.find_by(slug: params[:slug])

        # If able to destroy, no content
        if place.destroy
          head :no_content
        else # Else render error
          render json: {error: place.errors.messages}, status: 422
        end
      end

      private

      def place_params
        params.require(:place).permit(:name, :image_url, :location, :tags)
      end

      # To pass in additional resources in options hash
      # To specify what resources to include in the hash (e.g. visits, reviews...)
      def options
        @options ||= { include: %i[visits] }
      end
    end
  end
end