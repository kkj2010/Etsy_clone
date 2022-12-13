import { Link } from "react-router-dom";
import { FaEnvira } from "react-icons/fa";
import "./CheckOutPage.css";

export default function ChekcOutPage({ message }) {
  return (
    <>
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

      <div className="emptyCart">
        <h1 className="checkoutText1">Thank you for your order.</h1>
        <Link id="link" to="/">
          Discover something unique to fill it up
        </Link>
       
        <p>
          <FaEnvira />
          Shoppy offsets carbon emissions from every delivery
        </p>
      </div>
    </>
  );
}
