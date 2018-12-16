class ItemsController < ApplicationController
  before_action :move_to_index, except: :index
  
  def index
  end

  def new
    @item = Item.new
    @item.images.build
  end

  def create
    @item = Item.new(item_params)
      if @item.save
        redirect_to root_path
      else
        redirect_to new_item_path, alert:"商品登録に失敗しました"
      end
  end

  def show
  end


private
    def item_params
      params.require(:item).permit(:name, :description, :condition, :price, images_attributes: [:image] ).merge(seller_id: current_user.id)

    end

    def move_to_index
      redirect_to action: :index unless user_signed_in?
    end
end

