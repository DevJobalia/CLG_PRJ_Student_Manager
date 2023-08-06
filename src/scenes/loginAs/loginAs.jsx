import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginAs.css";

const LoginAs = () => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <h2>LogIn As</h2>
      <div className="button-container">
        <button onClick={() => handleButtonClick("/admin-teacher")}>
          Admin/Teacher
        </button>
        <button onClick={() => handleButtonClick("/mentor")}>Mentor</button>
        <button onClick={() => handleButtonClick("/student")}>Student</button>
      </div>
    </div>
  );
};

export default LoginAs;
