class UsersController < ApplicationController

before_action :authenticate_user!

  def mypage
  end

  def log_out
  end

  



  private

  def user_params
    params.require(:user).permit(:nickname, :email)
  end

end
