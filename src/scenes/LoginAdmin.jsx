import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateform = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "email required";
    }
    if (!password) {
      newErrors.password = "password required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateform()) {
      // Your form submission logic here
    }
  };
  return (
    <Wrapper>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <Logo />
          <h4>login As Admin</h4>
          <FormRow
            type="email"
            name="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <FormRow
            type="password"
            name="Password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <button type="submit" className="btn btn-block">
            submit
          </button>
          <GoogleOAuthProvider clientId="679749642395-30mmhi9f6ledqhg7mql8q8soe5d25paf.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                var decoded = jwt_decode(credentialResponse.credential);

                console.log(decoded);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </GoogleOAuthProvider>

          <button type="button" className="btn btn-block">
            {" "}
            explore the app{" "}
          </button>
          <p>
            Not a Member Yet?
            <Link to="/register" className="member-btn">
              Register
            </Link>
          </p>
        </form>
      </div>
    </Wrapper>
  );
};

export default LoginAdmin;
