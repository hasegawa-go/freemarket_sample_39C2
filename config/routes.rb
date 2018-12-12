Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'items#index'
  resources :items

  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks",
    registrations: 'users/registrations'
  }

  devise_scope :user do
    get 'users/sign_up/step_0', to: 'users/registrations#index'
  end

  get  'mypage', to: 'users#mypage', as: :user_mypage
  get  'log_out', to: 'users#log_out', as: :user_log_out
  get  'profile', to: 'users#profile', as: :user_profile

end
