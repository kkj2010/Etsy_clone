import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/reducers/userReducer";
import "./SignupForm.css";

export default function SignupForm({ onSuccess }) {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({
    email: "",
    firstname: "",
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
      first_name: formValues.firstname,
    };
    // dispatch(createUser(user));
    // onSuccess();
    dispatch(createUser(user))
    .then((res) => {
      if (res.ok) {
        onSuccess();
      }
    })
    .catch((error) => {
     
      if(user.password.length<6)
      {setError("Password must be longer than 6 characters")}
      if(user.password==="")
      {setError("Password can't be blank")}
      if(user.email==="")
      {setError("Email can't be blank")}
      if(user.first_name==="")
      {setError("Firstname can't be blank")}

    });

  };

  return (
    <>
      <h2>Create Your account</h2>
      <h3>Registration is easy</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input
            type="email"
            value={formValues.email}
            name="email"
            id="email"
            onChange={handleChange}
          className="newEmail"/>
        </div>

        <div>
          <label>First name</label>
          <input
            type="text"
            value={formValues.firstname}
            name="firstname"
            id="firstname"
            onChange={handleChange}
            className="firstName"/>
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={formValues.password}
            name="password"
            id="password"
            onChange={handleChange}
            className="newPassword"/>
        </div>

        <button type="submit" className="registerButton">
          Register
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
}
