import { useState } from "react";
import "./loginpage.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setGuestCredential(event) {
    event.preventDefault();
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  }
  
  return (
    <div class="signin-container">
      <form class="form-wrapper">
        <label class="input-label" for="email">
          Email Address{" "}
        </label>
        <input
          class="input"
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label class="input-label" for="password">
          Password{" "}
        </label>
        <input
          class="input"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div class="checkbox-div">
          <input type="checkbox" name="remember" />
          <label for="remember"> Remember me</label>
        </div>
        <span class="input-label btn-link">
          <a href="#">Forgot your Password?</a>
        </span>
        <input
          class="btn btn-primary-solid btn-login"
          type="submit"
          value="Login"
        />
        <button
          class="btn btn-secondary-solid btn-login"
          onClick={(e) => setGuestCredential(e)}
        >
          Use guest credentials
        </button>
        <button
          class="btn btn-link"
          onclick="location.href='/pages/signup-page/signup-page.html'"
        >
          Create New Account
        </button>
      </form>
    </div>
  );
};
