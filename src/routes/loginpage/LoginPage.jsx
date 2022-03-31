import { useState } from "react";
import "./loginpage.css";
import { useUser } from "../../context/user-context";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useUser();

  function setGuestCredential(event) {
    event.preventDefault();
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  }

  function loginHandler({ event, email, password }) {
    event.preventDefault();
    loginUser({ email, password });
  }

  return (
    <div className="signin-container">
      <form className="form-wrapper">
        <label className="input-label" htmlFor="email">
          Email Address{" "}
        </label>
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="input-label" htmlFor="password">
          Password{" "}
        </label>
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="checkbox-div">
          <input type="checkbox" name="remember" />
          <label htmlFor="remember"> Remember me</label>
        </div>
        <span className="input-label btn-link">
          <a href="#">Forgot your Password?</a>
        </span>
        <input
          className="btn btn-primary-solid btn-login"
          type="submit"
          value="Login"
          onClick={(event) => loginHandler({ event, email, password })}
        />
        <button
          className="btn btn-secondary-solid btn-login"
          onClick={(e) => setGuestCredential(e)}
        >
          Use guest credentials
        </button>
        <button className="btn btn-link">Create New Account</button>
      </form>
    </div>
  );
};
