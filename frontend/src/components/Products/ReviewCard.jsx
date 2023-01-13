import Rating from "./Rating";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview, editReview } from "../../store/reducers/productReducer";
import { formatDistanceToNow } from "date-fns";

export default function ReviewCard({ review }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.current);
  const [edit, setEdit] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [content, setContent] = useState(review.body);
  const [rating, setRating] = useState(review.rating);

  const handleClick = (review) => {
    dispatch(deleteReview(review));
  };

  const handleUpdate = (review) => {
    const updateReview = {
      ...review,
      rating, //rating:rating=> name is same with useState
      body: content,
    };
    dispatch(editReview(updateReview));
    setEdit(false);
  };

  return (
    <div className="review">
      <ul className="reviewSectionTitle">
        <div className="userAndDelete">
          <li className="reviewStarRating">
            <Rating rating={review.rating} />
          </li>
          {review.user.id === user?.id &&
            (edit ? (
              <>
                <button
                  onClick={() => handleClick(review)}
                  className="deleteReview"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(review)}
                  className="editReview"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleClick(review)}
                  className="deleteReview"
                >
                  Delete
                </button>
                <button onClick={() => setEdit(true)} className="editReview">
                  Edit
                </button>
              </>
            ))}
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

      {edit ? (
        <textarea
          className="editByUser"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <li className="reviewByUser">{review.body}</li>
      )}
    </div>
  );
}
