import { useParams } from "react-router-dom";
import "./ProductShow.css";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/reducers/productReducer";

export default function ProductShow() {
  const dispatch = useDispatch();
  const { category, productId } = useParams();
  const product = useSelector(fetchProduct(productId));
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick= (e)=> {
    //move to cart
  }


  return (
    <>
      <div className="productIndexContainer">
        <div className="listingPageContainer">
      <div className="listingPageImage">
        <div className="ImagesC">
           <li>
            
           </li>

        </div>
        <div className="arrowButton">
          <IoIosArrowDropleft />
        </div>
        <div className="imagesContainer">
          <img src="/img/necklace.png" />
        </div>
        <div className="arrowButton">
          <IoIosArrowDropright />
        </div>
      </div>
      <div className="cartColumnContainer">
        <h2>{product.name}</h2>
        <p>price</p>
       
        <p>Quantity</p>
        <select onChange={handleSelect} value={selected}>
          {options &&
            options.map((option, index) => (
              <option key={index}>{option}</option>
            ))}
        </select>
       
        <div>
          <button className="AddCartButton" type="submit" onClick={handleClick}>
            Add to Cart
          </button>
          <p>Description</p>
          <p>Shipping and return policies</p>
        
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
