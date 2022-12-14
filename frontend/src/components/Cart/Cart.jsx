import "./Cart.css";
import CartItem from "./CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "./PriceCard";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/reducers/productReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import {
  fetchCart,
  removeItemFromCart,
  selectSubTotalPrice,
} from "../../store/reducers/cartReducer";

const SHIPPING = 1000;

function formatPrice(price) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function Cart(item) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.current); //current user
  const [count, setCount] = useState(item.quantity);

  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const products = useSelector((state) =>
    Object.values(state.cart?.items ?? {})
  );

  const subtotalPrice = useSelector(selectSubTotalPrice);
  const totalPrice = formatPrice(subtotalPrice + SHIPPING);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart());
    }
  }, [dispatch, userId]);

  const handleClick = (e) => {};

  //  if (!products.length)

  const hasProducts = products && products.length > 0;
  // const totalPrice =
  //   products &&
  //   products.reduce(
  //     (prev, current) => prev + parseInt(current.price) * current.quantity,
  //     0
  //   );
  if (!hasProducts) {
    return (
      <div className="cartItems">
        <EmptyCart />
      </div>
    );
  }
  return (
    <>
      {/* <p>Cart</p>
      <div>Itmes in your cart</div>
      <section>
        {!hasProducts && <p>Your cart is empty</p>}
        {hasProducts && (
          <>
            <ul>
              {products &&
                products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
            </ul>
            <div>
              <PriceCard text="Items Total" price={totalPrice} />
              <BsFillPlusCircleFill />
              <PriceCard text="Shipping" price={SHIPPING} />
              <FaEquals />
              <PriceCard text="Total" price={totalPrice + SHIPPING} />
            </div>
          </>
        )}
      </section> */}

      <div className="cartItems">
        <div className="cartHeader">
          <span className="header1">Items in your cart</span>
          <span className="header2">
            <Link style={{ color: "black" }} to="/">
              Keep Shopping
            </Link>
          </span>
        </div>
        <div className="warning">
          <span className="handImage">
            <img src="/img/hand.png" />
          </span>
          <span className="protection">Shoppy Purchase Protection:</span>
          <span className="protectionDes">
            Shop confidently on Shoppy knowing if something goes wrong with an
            order, we've got your back
          </span>
        </div>

        {hasProducts && (
          <div className="cartContainer">
            <div>
              {products.map((product) => (
                <div key={product.id}>
                  <CartItem item={product} />
                </div>
              ))}
            </div>

            {/* <section className="cartItemsContainer">
            <div className="r">
            <li className="cartItemImage">
              <img src="/img/necklace2.png" />


            </li>
            <ul className="cartItemDetails">
              <li className="cartProductName">
                <span>{product.name}</span>
                <span className="removeCart">Remove</span>
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
              <li className="cartPrice">{formatPrice(product.price)}</li>
            </ul>
            </div>
       
            <div className='order-options'>
            <div className="giftCheckboxText">
            <input className="giftCheckbox" type="checkbox"/>
              This order is a gift
            </div>
            <div className='giftTextarea'>
              <textarea name='message to seller'
              placeholder="Add a note to seller (optional)" >
              </textarea>
              </div>
              </div>

          </section> */}

            <section className="checkOutContainer">
              <ul className="checkoutDetails">
                <li className="shoppingDetail">
                  <span className="detailText">Item(s) Total</span>
                  <span className="detailText2">
                    ${(subtotalPrice / 100).toFixed(2)}
                  </span>
                </li>
                <li className="shoppingDetail1">
                  <span className="detailText">Subtotal</span>
                  <span className="detailText2">
                    ${(subtotalPrice / 100).toFixed(2)}
                  </span>
                </li>
                <li className="shoppingDetail">
                  <span className="detailText2">Shipping</span>
                  <span className="detailText2">
                    ${(SHIPPING / 100).toFixed(2)}
                  </span>
                </li>
                <li className="shoppingDetail">
                  <span className="detailText">Total</span>
                  <span className="detailText">{totalPrice}</span>
                </li>
              </ul>
              <button onClick={handleClick} className="checkout" type="button">
                <Link style={{ color: "white" }} to="/cart/checkout">
                  Proceed to checkout
                </Link>
              </button>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
