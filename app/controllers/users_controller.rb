class UsersController < ApplicationController

before_action :authenticate_user!

  def mypage
    @user = User.find(current_user)
  end

  def log_out
  end

  def profile
    @user = User.find(current_user)
  end



  private

  def user_params
    params.require(:user).permit(:nickname, :email)
  end

end
