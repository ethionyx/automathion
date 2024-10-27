import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Grid, CircularProgress, IconButton, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Footer from "./layout/Footer";
import Header from "./layout/header/header";
import SignUp from "./shared/account/SignUp";
import AutomationHome from "./entitles/projects/AutomationHome";
import Login from "./shared/account/Login";
import Sidebar from "./layout/SideBar";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Router>
        <Header toggleDrawer={toggleDrawer} />

        <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#ffffff' }}>
          <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <Routes>
              <Route
                path="/"
                element={isAuthenticated ? <AutomationHome /> : <Navigate to="/login" />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Box>
        </Box>

        <Footer />
      </Router>
    </Box>
  );
};

export default App;
