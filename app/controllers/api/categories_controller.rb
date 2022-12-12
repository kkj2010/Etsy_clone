class Api::CategoriesController < ApplicationController
    def index
        @categories = Category.all
        render 'api/category/index'
    end

    def show
        # FIXME:
        # @category= Category.find_by(id: params[:id])
        # @allProducts= @category.all
        # render 'api/category/show'
    end


    def create
        @category = Category.create(category_params)
        if @category.save
        else
            render json: @category.errors.full_messages, status:422
        end
    end


    private
    def category_params
        params.require(:category).permit(:name)
    end
end