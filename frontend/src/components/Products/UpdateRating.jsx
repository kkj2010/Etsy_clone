import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function UpdateRating({ rating, onClick }) {
  return [1, 2, 3, 4, 5].map((star) => (
    <span className="starIcon" key={star} onClick={() => onClick(star)}>
      {star <= rating ? <AiFillStar /> : <AiOutlineStar />}
    </span>
  ));
}
