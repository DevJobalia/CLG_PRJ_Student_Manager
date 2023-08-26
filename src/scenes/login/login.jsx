import {
  Box,
  useTheme,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import { ColorModeContext, tokens } from "../../theme";

import React, { useState } from "react";
import "./login.css";

// VISMAY
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // VALIDATION
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
    <div className="login">
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" color={colors.grey[500]} htmlFor="username">
          LOGIN
        </Typography>
        <br />
        <div>
          <Typography variant="h3" color={colors.grey[500]} htmlFor="username">
            Username:
          </Typography>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            required
          />
        </div>
        <div>
          <Typography variant="h3" color={colors.grey[500]} htmlFor="password">
            Password:
          </Typography>
          <input
            type="password"
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            required
          />
        </div>
        <button type="submit">Submit</button>
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
      </form>
    </div>
  );
};

export default Login;
