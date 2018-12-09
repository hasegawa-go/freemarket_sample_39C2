Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'items#index'

  devise_for :users, controllers: {
    omniauth_callbacks: "users/omniauth_callbacks"
}
# get "pages/user_info", as: "user_root"

  get  'mypage', to: 'users#mypage', as: :user_mypage
  get  'logout', to: 'users#logout', as: :user_logout
  get  'logintop', to: 'users#logintop', as: :devise_sessions_logintop

end
