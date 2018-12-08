class UsersController < ApplicationController

  def mypage
  end

  private

  def user_params
    params.require(:user).permit(:nickname, :email)
  end

end
