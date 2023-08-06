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
// import { useEffect } from 'react';
import "./login.css";
// import Navbar from "../navbar/Navbar";
// import { Link } from 'react-router-dom';

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle login logic, e.g., send the data to an API for authentication.
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div>
          <Typography variant="h3" color={colors.grey[500]} htmlFor="username">
            Username:
          </Typography>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <Typography variant="h3" color={colors.grey[500]} htmlFor="password">
            Password:
          </Typography>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
