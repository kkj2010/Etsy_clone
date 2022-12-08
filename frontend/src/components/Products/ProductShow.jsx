import { useParams } from "react-router-dom";
import "./ProductShow.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

export default function ProductShow() {
  const { category, productId } = useParams();

  return (
    <>
      productShow
      <div className="listingPageContainer"></div>
      <div class="listingPageImage">
        <div className="arrowButton"><IoIosArrowDropleft/></div>
        <div class="imagesContainer">
          <img src="/img/necklace.png" />
        </div>
        <div className="arrowButton"><IoIosArrowDropright/></div>
      </div>
      <div class="cartColumn"></div>
    </>
  );
}
