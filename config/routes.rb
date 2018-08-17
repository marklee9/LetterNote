Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # what does namespace api do?

  # defaults: {format: :json} makes rails to automatically look for json file
  # when you try to render something.
   
  namespace :api, defaults: {format: :json} do
    resources :users, only:[:create]
    resource :session, only:[:create, :destroy]
    resources :notebooks, only:[:create, :show, :destroy, :index]
    resources :notes
    
  end

  # sets root page to yield: /static_pages/root.html.erb
  root "static_pages#root"
end
