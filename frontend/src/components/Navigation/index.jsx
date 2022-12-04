import { useState } from "react";
import { AuthModal } from "../AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/reducers/userReducer";

export default function Navigation() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.current);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {currentUser && (
        <button onClick={() => dispatch(logoutUser())}>Logout</button>
      )}
      <h1>Etsy Homepage</h1>
      {!currentUser && (
        <button onClick={() => setModalOpen(true)}>Sign In</button>
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
    </div>
  );
}
