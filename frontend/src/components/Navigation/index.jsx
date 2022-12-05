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
    <div className="navBar">
      <Link to="/" className="logo">
        <div>Shoppy</div>
      </Link>
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
      {modalOpen ? (
        <AuthModal
          onSuccess={() => {
            setModalOpen(false);
            console.log("logged in!");
          }}
          onClose={() => setModalOpen(false)}
        />
      ) : null}

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
            <Link>
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

      {/* {currentUser && (
        <button onClick={() => dispatch(logoutUser())}>Sign out</button>
      )} */}

      <button className="cartButton">
        <BsCart4 />
      </button>
    </div>
  );
}
