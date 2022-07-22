Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'

  # Namespace routes
  namespace :api do
    namespace :v1 do
      resources :places, param: :slug
      resources :visits
    end
  end

  # Handles Routing to React components without interfering with Rails Routes for our api
  get '*path', to: 'pages#index', via: :all

end
