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
        render "api/review/show"
    
        
       else
        render json: {message: "Not Found"} , status: :not_found
       end
    end


    def destroy
        
    end


    def review_params
        params.require(:review).permit(:body, :rating)    
    end

end
