import { useState } from "react";
import "./Reviews.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reducers/productReducer";
import ReviewCard from "./ReviewCard";
import UpdateRating from "./UpdateRating";
import { AuthModal } from "../AuthModal";

export default function Reviews({ reviews }) {
  const user = useSelector((state) => state.user.current);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector((state) => state.products[productId]);
  const [errMessage, setErrMessage] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = (e) => {
    e?.preventDefault();
    setModalOpen((prev) => !prev);
  };

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
      setErrMessage("");
    }
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
      {errMessage && <div className="errorMessage">{errMessage}</div>}
      <form
        className="reviewForm"
        onSubmit={user ? handleSubmit : handleToggleModal}
      >
        <div className="reviewFormLeft">
          <textarea
            className="reviewTextArea"
            placeholder="Type comment here"
            value={content}
            // required
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
              <UpdateRating rating={rating} onClick={setRating} />
            </li>
          </ul>
          <div>
            {/* {submitButton} */}

            <button className="reviewSubmitButton" type="submit" >
              Submit my reveiw
            </button>
          </div>
        </div>
      </form>
      <div className="reviewSection">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
      {modalOpen && (
        <AuthModal onClose={handleToggleModal} onSuccess={handleToggleModal} />
      )}
    </>
  );
}
