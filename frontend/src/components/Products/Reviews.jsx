import { useState } from "react";
import "./Reviews.css";
import { AiOutlineStar } from "react-icons/ai";
export default function Review() {
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
            <p className="askReviewTitle">Share your thoughts with the Shoppy community </p>
            <ul>
            
              <li>The quality of item</li>
              <li>If the item matched the description</li>
              <li>If the item met your expectations</li>
              <li className="rateItem">Rate this item</li>
              <li className="starRating">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              </li>
            </ul>
            <div >
              <button className="reviewSubmitButton"
              // onSubmit={handleSubmit} 

              type="submit">Submit my reveiw</button>
            </div>
          </div>
        </form>
      
      </>
    );
  };

