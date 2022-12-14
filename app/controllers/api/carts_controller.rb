class Api::CartsController < ApplicationController
    # before_action  :required_login, only: [:index, :update, :destroy]

    def show
        if current_user
            if current_user.cart.nil?
                @cart = current_user.create_cart!
            else
                @cart = current_user.cart
            end
           
            render :show
        end
        
        
        # @user= current_user
        #     @cart= Cart.select(:user_id, :product_id, :quantity).where(user_id:@user.id)
        #     render :show
    end


  
    # def create
    #     @user = current_user
    #     @cart = Cart.find_by(user_id: @user.id, product_id: cart_params[:product_id])
    #     if @cart
    #         @cart = @cart.update(quantity: cart_params[:quantity].to_i + @cart.quantity)
    #     else
    #         @cart = Cart.new(user_id: @user.id, product_id: cart_params[:product_id], quantity: cart_params[:quantity])
    #         @cart.save
    #     end
    #     render :show
    # end

    def create
        @cart = current_user.cart
        cart_item =  @cart.add_product(params[:product], params[:quantity])
        
        render json: {
            id: cart_item.id,
            quantity: cart_item.quantity,
            product: cart_item.product,
            category: cart_item.product.category,
        }, status: :created
    end

    # def update
    #     @cart= current_user.cart
    #     @cart_item = Cart.find_by(user_id: @user.id, product_id: cart_params[:product_id])
    #     if @cart
    #         @cart = @cart.update(quantity: cart_params[:quantity])
    #     end
    #     render :show
    # end

    # def update
    #     if logged_in?
    #         @cart= Cart.find_by(id:params[:id])
    #         if @cart.update(cart_params)
    #             @cart= Cart.all.select{|item| item.user_id==current_user.id}
    #             render :show
    #         end
    #     else
    #         render json: @cart.errors.full_messages, status: 404

    #     end
    # end


    def clear_cart
        @user = current_user
        @cart = Cart.where(user_id: @user.id).destroy_all

        render :show
    end


    private
    def cart_params
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end