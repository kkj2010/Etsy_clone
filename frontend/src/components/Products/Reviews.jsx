import { useEffect, useRef, useState } from "react";
import "./Reviews.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { useParams } from "react-router-dom";
import {
  createReview,
  deleteReview,
} from "../../store/reducers/productReducer";
import Rating from "./Rating";

export default function Reviews({ reviews }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);

  const [errMessage, setErrMessage] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content === "") {
      setErrMessage("Please write comment");
    } else if (rating === 0) {
      setErrMessage("Please rate the product");
    } else {
      const review = { body: content, rating };
      dispatch(createReview(product.id, review));
      setContent("");
    }
  };

  const handleClick = (review) => {
    dispatch(deleteReview(review));
  };

  return (
    <>
      <div className="reviews" onSubmit={handleSubmit}>
        <div className="reviewHeader">
          <span className="reviewLine"></span>
          <span className="reviewTitle">Reviews</span>
          <span className="reviewLine2"></span>
        </div>
      </div>

      <form className="reviewForm" onSubmit={handleSubmit}>
        <div className="reviewFormLeft">
          <textarea
            className="reviewTextArea"
            placeholder="Type comment here"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="reviewFormRight">
          <p className="askReviewTitle">Rate features</p>
          <ul>
            <li className="suggestedReview">The quality of item</li>
            <li className="suggestedReview">
              If the item matched the description
            </li>
            <li className="suggestedReview">
              If the item met your expectations
            </li>
            <li className="rateItem">Overall rating</li>
            <li className="starRating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  className="starIcon"
                  key={star}
                  onClick={() => setRating(star)}
                >
                  {star <= rating ? <AiFillStar /> : <AiOutlineStar />}
                </span>
              ))}
            </li>
          </ul>
          <div>
            <button className="reviewSubmitButton" type="submit">
              Submit my reveiw
            </button>
          </div>
        </div>
      </form>
      <div className="reviewSection">
        {reviews.map((review) => (
          <div className="df" key={review.id}>
            <ul className="reviewSectionTitle">
              <div className="userAndDelete">
                <li className="reviewStarRating">
                  <Rating rating={review.rating} />
                </li>
                {review.user.id === user?.id && (
                  <button
                    onClick={() => handleClick(review)}
                    className="deleteReview"
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className="writer">
                <li className="reviewDate">
                  {formatDistanceToNow(new Date(review.createdAt), {
                    addSuffix: true,
                  })}
                </li>

                <li className="reviewUser">by {review.user.firstName}</li>
              </div>
            </ul>

            <li className="reviewByUser">{review.body}</li>
          </div>
        ))}
      </div>
    </>
  );
}
