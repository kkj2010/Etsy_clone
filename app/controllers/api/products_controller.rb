class Api::ProductsController < ApplicationController
    def index
        @products= Product.all
        render "api/products/index"

    end

    def show
        @product= Product.find_by(id:params[:id])
        render "api/products/show"
    end




    def create
        @product= Product.create(product_params)
        if @product.save
            render 'api/products/index'
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product= Product.find_by(id:params[:id])
        @product.destroy
        head :no_content
    end


    private
    def product_params
        params.require(:product).permit(:description, :name, :price)
    end

end