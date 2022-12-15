Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :products, only:[:create, :index, :show]  do
      resources :reviews, only:[:index, :create]
    end
    resources :categories, only: [:index, :create, :show]
    resource :cart, only: [:create, :update, :show]
    resources :cart_items, only: [:destroy, :update]
    resources :reviews, only:[:destroy]
  end
  get '*path', to: "static_pages#frontend_index"
  
end
