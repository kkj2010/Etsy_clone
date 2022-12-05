import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/reducers/userReducer";
import "./LoginForm.css";

export default function LoginForm({ onSuccess }) {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: formValues.email,
      password: formValues.password,
    };
    dispatch(loginUser(user))
      .then((res) => {
        if (res.ok) {
          onSuccess();
        }
      })
      .catch((error) => {
        setError("Invalid credentials, try again"); //change this to have both password and email error!!!!
      });
  };
  const handleDemoUser = () => {
    // setFormValues({
    //   email: "user@gmail.com",
    //   password: "1234567",
    // });
    const user = {
      email: "user@gmail.com",
      password: "1234567"
    };
    console.log(user)
    dispatch(loginUser(user))
      .then((res) => {
        if (res.ok) {
          onSuccess();
        }
      })
      .catch((error) => {
        setError("Invalid credentials, try again");
      });
  };

  return (
    <>
      {error && error}
      {/* if there is an error then show error no error then empty string */}
      <div className="loginForm">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email address
          <input
            type="email"
            value={formValues.email}
            name="email"
            id="email"
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={formValues.password}
            name="password"
            id="password"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="submitButton">Sign in</button>
        <button onClick={handleDemoUser}>Demo User</button>
      </form>
      </div>
    </>
  );
}
