import LoginForm from "../session/LoginForm";
import SignupForm from "../session/SignupForm";
import { Modal } from "../../context/modal";
import { useState } from "react";

export function AuthModal({ onClose, onSuccess }) {
  const [modal, setModal] = useState("login");

  return (
    <Modal onClose={onClose}>
      <button onClick={onClose}>X</button>
      {modal === "login" && (
        <button onClick={() => setModal("register")}>Register</button>
      )}
      {modal === "login" ? (
        <div className="session-modal">
          <LoginForm onSuccess={onSuccess} />
        </div>
      ) : (
        <div className="register-modal">
          <SignupForm onSuccess={onSuccess} />
        </div>
      )}
    </Modal>
  );
}
