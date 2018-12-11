class ItemsController < ApplicationController
  before_action :move_to_index, except: :index
  
  def index
  end

  def new
    @item = Item.new
  end

  def create
	 	# Item.create(image: item_params[:image], text: tweet_params[:text],user_id: current_user.id)
  end

  def show
  end


private
    def item_params
      params.permit(:image,:text,)
    end

    def move_to_index
      redirect_to action: :index unless user_signed_in?
    end
end

