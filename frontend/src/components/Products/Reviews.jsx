import { useState } from "react";
import "./Reviews.css";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function Reviews({ reviews }) {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user.current);

  // const [errMessage, setErrMessage] = useState("");
  // const [content, setContent] = useState("");
  // const [rating, setRating] = useState(0);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (content === "") {
  //     return setErrMessage("Please write comment");
  //   } else if (rating === 0) {
  //     return setErrMessage("Please rate the product");
  //   }
  console.log(reviews);

  return (
    <>
      <div className="reviews">
        <div className="reviewHeader">
          <span className="reviewLine"></span>
          <span className="reviewTitle">Reviews</span>
          <span className="reviewLine2"></span>
        </div>
      </div>

      <form className="reviewForm">
        <div className="reviewFormLeft">
          <textarea
            className="reviewTextArea"
            placeholder="Type comment here"
            // value={content}
            required
            // onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="reviewFormRight">
          <p className="askReviewTitle">Rate features </p>
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
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </li>
          </ul>
          <div>
            <button
              className="reviewSubmitButton"
              // onSubmit={handleSubmit}

              type="submit"
            >
              Submit my reveiw
            </button>
          </div>
        </div>
      </form>
      <div className="reviewSection">
        
        <ul>
          {reviews.map((review) => (
            <div className="df">
              <li className="reviewStarRating" key={review.id}>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <span className="reviewDate">7 days ago </span>
              </li>
              <li className="reviewByUser">{review.body}</li>
            </div>
          ))}
        </ul>
        </div>
    
    </>
  );
}
