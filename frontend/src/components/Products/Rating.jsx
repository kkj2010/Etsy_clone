import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export default function Rating({ rating }) {
  let stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar key={i} />);
  }
  for (let i = rating; i < 5; i++) {
    stars.push(<AiOutlineStar key={i} />);
  }
  return stars;
}
