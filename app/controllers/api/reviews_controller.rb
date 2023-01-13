class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]
    
    def index

    end

    def create
        @product= Product.find_by(id: params[:product_id])
        if @product
        @review= Review.new(review_params)
        @review.user= @current_user
        @review.product= @product
        @review.save!
        render "api/reviews/show"
    
        
       else
        render json: {message: "Not Found"} , status: :not_found
       end
    end

    def update
        @user= current_user
        @review= Review.find_by(id:params[:id])
        if @review
            review.update
        end
        render "api/reviews/show"
    end


    def destroy
        @review= Review.find_by(id: params[:id])
        @review.destroy
        head :no_content
    end


    def review_params
        params.require(:review).permit(:body, :rating)    
    end

end
