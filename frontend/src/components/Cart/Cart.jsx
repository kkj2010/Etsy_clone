import "./Cart.css";
import CartItem from "./CartItem";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import PriceCard from "./PriceCard";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/reducers/productReducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SHIPPING = 10.0;

function formatPrice(price) {
  return (price / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export default function Cart() {
  const dispatch = useDispatch();
  // const userId= useSelector((state)=> state.session.user?.id);
  const options = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const calculateSubtotal = () => {};

  const handleClick = (e) => {
    // dispatch(deleteProduct(userId)); // userId어디서?
  };

  const product = {
    id: 1,
    name: "Desire to have children Fertility Bracelet Rock Crystal Rose Quartz Moonstone Harmony Conception Pregnancy Birth 6 mm",
    price: 10000,
    description:
      "Sometimes people jot down pseudo-code on paper. If that pseudo-code runs directly on their computers, its best, isn't it? Ruby tries to be like that, like pseudo-code that runs. Python people say that too.",
    seller: {
      id: 1,
      email: "user@gmail.com",
      firstName: "user",
      createdAt: "2022-12-08T15:57:02.121Z",
    },
    category: { id: 3, name: "clothing_shoes", label: "Clothing \u0026 Shoes" },
    images: [
      "/img/necklace.png",
      "/img/necklace2.png",
      "/img/necklace3.png",
      "/img/necklace4.png",
      "/img/necklace5.png",
      "/img/necklace6.png",
    ],
  };
  // const hasProducts = products && products.length > 0;
  // const totalPrice =
  //   products &&
  //   products.reduce(
  //     (prev, current) => prev + parseInt(current.price) * current.quantity,
  //     0
  //   );
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
        <div className="cartContainer">
          <section className="cartItemsContainer">
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
          </section>
          <section className="checkOutContainer">
            <ul className="checkoutDetails">
              <li className="shoppingDetail">
                <span className="detailText">Item(s) Total</span>
                <span className="detailText2">$300.00</span>
              </li>
              <li className="shoppingDetail1">
                <span className="detailText">Subtotal</span>
                <span className="detailText2">$300.00</span>
              </li>
              <li className="shoppingDetail">
                <span className="detailText2">Shipping</span>
                <span className="detailText2">${SHIPPING.toFixed(2)}</span>
              </li>
              <li className="shoppingDetail">
                <span className="detailText">Total</span>
                <span className="detailText">$310.00</span>
              </li>
            </ul>
            <button onClick={handleClick} className="checkout" type="button">
              <Link style={{ color: "white" }} to="/cart/checkout">
                Proceed to checkout
              </Link>
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
