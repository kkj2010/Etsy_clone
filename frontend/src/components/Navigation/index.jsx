import { useEffect, useState } from "react";
import { AuthModal } from "../AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/reducers/userReducer";
import { Link, useParams, useHistory } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
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
    
      {currentUser && (
        <button onClick={() => dispatch(logoutUser())}>Logout</button>
      )}
      <Link to="/">
        <div className="logo">Shoppy</div>
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
        <button onClick={() => setModalOpen(true)} className="signinButton">Sign In</button>
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
      <button className="cartButton">
        <BsCart4 />
      </button>
    </div>
  );
}
