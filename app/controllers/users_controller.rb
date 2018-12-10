class UsersController < ApplicationController

before_action :signup_index

  def mypage
  end

  def log_out
  end

  def  signup_index
  end



  private

  def user_params
    params.require(:user).permit(:nickname, :email)
  end

end
