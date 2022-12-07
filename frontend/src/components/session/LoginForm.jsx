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

  const [errors, setErrors] = useState(null);
  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: formValues.email,
      password: formValues.password,
    };
   
    setErrors(null)
    dispatch(loginUser(user))
      .then((res) => {
        if (res.ok) {
          onSuccess();
        }
      })
      .catch(async(res) => {
        const errors= await res.json();
        setErrors("Invalid credentials");
      });
  };
  const handleDemoUser = () => {
    // setFormValues({
    //   email: "user@gmail.com",
    //   password: "1234567",
    // });
    setErrors("");
    const user = {
      email: "user@gmail.com",
      password: "1234567",
    };

    dispatch(loginUser(user))
      .then((res) => {
        if (res.ok) {
          onSuccess();
        }
      })
      .catch(async(res) => {
        const errors= await res.json();
        setErrors(errors);
      });
  };

  return (
    <>
      {/* if there is an error then show error no error then empty string */}
      <div className="loginForm">
        <h1 className="loginTitle">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              value={formValues.email}
              name="email"
              id="email"
              onChange={handleChange}
              className="email"
            />
            
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={formValues.password}
              name="password"
              id="password"
              onChange={handleChange}
              className="password"
            />
          </div>

          <button type="submit" className="submitButton">
            Sign in
          </button>

          <button onClick={handleDemoUser} className="demoUser" type="button">
            Demo User
          </button>
          {errors && <div className="errorLogin">{errors}</div>}
          <div className="privacyPolicy">
            <p>
              By clicking Sign in, you agree to Shoppy's Terms of Use and
              Privacy Policy. Etsy may send you communications; you may change
              your preferences in your account settings. We'll never post
              without your permission.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
