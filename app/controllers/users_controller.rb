class UsersController < ApplicationController

  def mypage
  end

  def logout
  end

  def  logintop
  end



  private

  def user_params
    params.require(:user).permit(:nickname, :email)
  end

end
