Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :bnbs, only: [:index, :show]
    resources :bookings, only: [:create, :destroy, :index]
    resources :reviews, only: [:create, :index]
  end

end
