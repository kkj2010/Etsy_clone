import { useEffect, useState } from "react";
import { AuthModal } from "../AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/reducers/userReducer";
import { Link, useParams, useHistory } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { GiFamilyHouse } from "react-icons/gi";
import "./index.css";
import CartStatus from "../Cart/CartStatus";

export default function Navigation() {
  const history = useHistory();
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.current);
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/products/${text}`); //
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <>
      <div className="navBar">
        <div className="logo">
          <Link to="/">Shoppy</Link>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for anything"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="searchBar"
          />
          <button type="submit" className="searchBarButton">
            <IoSearch />
          </button>
        </form>

        {!currentUser && (
          <button onClick={() => setModalOpen(true)} className="signinButton">
            Sign in
          </button>
        )}

        <div className="accountButton">
          {currentUser && (
            <button className="profileButton">
              <CgProfile />
              <MdArrowDropDown />
            </button>
          )}
          <ul className="dropdownContent">
            <li>
              <CgProfile />
              <Link>
                <span>View your profile</span>
              </Link>
            </li>
            <li>
              <GiFamilyHouse />
              <Link to={"/products/new"}>
                <span>Sell on Shoppy</span>
              </Link>
            </li>
            <li onClick={() => dispatch(logoutUser())}>
              <RiLogoutBoxLine />
              <Link>
                <span>Sign out</span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <button className="cartButton">
            <Link style={{color:"black"}} to={"/cart"}>
              <BsCart4 />
              {/* <CartStatus/> */}
            </Link>
          </button>
        </div>
      </div>

      <div className="displayBar">
        <ul className="displayTable">
          <li>Holiday Shop</li>
          <li>
            <Link style={{ color: "grey" }} to={"/products/jewelry"}>
              Jewelry & Accessories
            </Link>
          </li>
          <li> Clothing & Shoes</li>
          <li> Home & Living</li>
          <li> Wedding & Party</li>
          <li> Toys</li>
          <li> Art & Collectibles</li>
        </ul>
      </div>

      <div className="line"></div>
      {modalOpen ? (
        <AuthModal
          onSuccess={() => {
            setModalOpen(false);
            // console.log("logged in!");
          }}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </>
  );
}
