import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import LoginForm from "./scenes/login/login";
// import LoginAs from "./scenes/loginAs/loginAs";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

// VISMAY
import Landing from "./scenes/Landing";
import Login from "./scenes/LoginStudent";
import LoginMentor from "./scenes/LoginMentor";
import LoginAdmin from "./scenes/LoginAdmin";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/lg" element={<LoginForm />} /> */}

              <Route path="/" element={<Landing />} />
              {/* <Route path="/student" element={<Login />} />
              <Route path="/mentor" element={<LoginMentor />} />
              <Route path="/admin" element={<LoginAdmin />} /> */}
              <Route path="/student" element={<LoginForm />} />
              <Route path="/mentor" element={<LoginForm />} />
              <Route path="/admin" element={<LoginForm />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
