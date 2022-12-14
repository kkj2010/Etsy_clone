class Api::CartItemsController < ApplicationController
    # before_action  :required_login, only: [:index, :update, :destroy]

    def destroy
        cart_item = CartItem.find(params[:id])
        if cart_item.cart_id == current_user.cart.id
            cart_item.destroy
            head :no_content
        end   
    end
end
