import "./Cart.css";
import CartItem from "./CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";

import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/reducers/productReducer";
import { useEffect, useState } from "react";
import { createSelectorHook, useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import {
  fetchCart,
  removeItemFromCart,
  selectSubTotalPrice,
  selectTotalQuatity,
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

  const products = useSelector((state) =>
    Object.values(state.cart?.items ?? {})
  );

  const subtotalPrice = useSelector(selectSubTotalPrice);
  // const subtotalPrice =
  const totalPrice = formatPrice(subtotalPrice + SHIPPING);

  const total = useSelector(selectTotalQuatity);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart());
    }
  }, [dispatch, userId]);

  const handleClick = (e) => {
    products.forEach((product) => dispatch(removeItemFromCart(product.id)));
  };

  const hasProducts = products && products.length > 0;

  if (!hasProducts || !userId) {
    return (
      <div className="cartItems">
        <EmptyCart />
      </div>
    );
  }
  return (
    <>
      <div className="cartItems">
        <div className="cartHeader">
          <span className="header1">{total} Items in your cart</span>
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
