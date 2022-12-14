class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
        render "api/products/index"

    end

    def show
        @product = Product.find_by(id: params[:id])
        if @product
            render "api/products/show"
        else
            render json: { message: 'Product not found' }, status: :not_found
        end
        
    end

    def create
        @product = Product.new
        @product.name = params[:name]
        @product.price = params[:price].to_i
        @product.description = params[:description]
        @product.seller = current_user
        @product.category_id = params[:category_id].to_i
        @product.photo.attach(params[:photo]) if params[:photo]

        if @product.save
            render 'api/products/show', status: :created
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def destroy
        @product= Product.find_by(id:params[:id])
        @product.destroy
        head :no_content
    end


    # private
   
    # def product_params
    #     params.require(:product).permit(:description, :name, :price, :category_id, :photo)
    # end
end