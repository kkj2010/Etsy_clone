import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {removeItemFromCart} from "../../store/reducers/cartReducer"

function formatPrice(price) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function CartItem({ item }) {
  const dispatch= useDispatch()
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick =(e)=> {
      dispatch(removeItemFromCart(item.id))
  }
  return (
    <>
      {/* <div className="cartContainer"> */}
      <section className="cartItemsContainer">
        <div className="r">
          <Link to={`/products/${item.category.name}/${item.id}`}>
            <li className="cartItemImage">
              <img src="/img/necklace2.png" />
            </li>
          </Link>
          <ul className="cartItemDetails">
            <li className="cartProductName">
              <Link to={`/products/jewelry/${item.id}`}>
                <span>{item.product.name}</span>
              </Link>
              <span onClick={handleClick} className="removeCart">Remove</span>
            </li>
            <li className="chooseQty">
              <select
                className="cartOptionBar"
                onChange={handleSelect}
                value={selected}
              >
                {options &&
                  options.map((option, index) => (
                    <option key={index}>{option}</option>
                  ))}
              </select>
            </li>
            <li className="cartPrice">{formatPrice(item.product.price)}</li>
          </ul>
        </div>

        <div className="order-options">
          <div className="giftCheckboxText">
            <input className="giftCheckbox" type="checkbox" />
            This order is a gift
          </div>
          <div className="giftTextarea">
            <textarea
              name="message to seller"
              placeholder="Add a note to seller (optional)"
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
}
