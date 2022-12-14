class Api::CartItemsController < ApplicationController
    # before_action  :required_login, only: [:index, :update, :destroy]

 

    def update
        @cart = current_user.cart
        cart_item= CartItem.find(params[:id])
        if cart_item.cart_id===current_user.cart_id
            cart_item.update(quantity: cart_item[:quantity])
            render 'api/carts/show'
        else
            render json: {errors: cart_item.errors.full_messages}, status:  :unprocessable_entity
        end

    
    end

    def destroy
        cart_item = CartItem.find(params[:id])
        if cart_item.cart_id == current_user.cart.id
            cart_item.destroy
            head :no_content
        end   
    end


end
