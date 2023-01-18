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
import AllProductsSearch from "../Products/AllproductsSearch";

export default function Navigation() {
  const history = useHistory();
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.current);
  const [modalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!text){
      return; 
    }
    history.push(`/products/search/${text}`);
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
              <span>View your profile</span>
            </li>
            <li>
              <GiFamilyHouse />
              <Link to={"/products/new"}>
                <span>Sell on Shoppy</span>
              </Link>
            </li>
            <li
              onClick={() => {
                dispatch(logoutUser());
                history.replace("/");
              }}
            >
              <RiLogoutBoxLine />

              <span>Sign out</span>
            </li>
          </ul>
        </div>

        <div>
          <button className="cartButton">
            <Link style={{ color: "black" }} to={"/cart"}>
              <BsCart4 />
              {/* <CartStatus/> */}
            </Link>
          </button>
        </div>
      </div>

      <div className="displayBar">
        <ul className="displayTable">
          <li>
            <Link style={{ color: "grey" }} to={"/products/holiday_shop"}>
              Holiday Shop
            </Link>
          </li>

          <li>
            <Link style={{ color: "grey" }} to={"/products/jewelry"}>
              Jewelry & Accessories
            </Link>
          </li>
          <li>
            <Link style={{ color: "grey" }} to={"/products/clothing_shoes"}>
              Clothing & Shoes
            </Link>
          </li>
          <li>
            <Link style={{ color: "grey" }} to={"/products/home_living"}>
              Home & Living
            </Link>
          </li>
          <li>
            {" "}
            <Link style={{ color: "grey" }} to={"/products/wedding_party"}>
              Wedding & Party
            </Link>{" "}
          </li>
          <li>
            <Link style={{ color: "grey" }} to={"/products/toys"}>
              Toys
            </Link>
          </li>
          <li>
            {" "}
            <Link style={{ color: "grey" }} to={"/products/art"}>
              Art & Collectibles
            </Link>
          </li>
        </ul>
      </div>

      <div className="line"></div>
      {modalOpen ? (
        <AuthModal
          onSuccess={() => {
            setModalOpen(false);
          }}
          onClose={() => setModalOpen(false)}
        />
      ) : null}
    </>
  );
}
