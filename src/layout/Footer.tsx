import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        zIndex: 10,
        background: "linear-gradient(135deg, #1a1a1a 30%, #333 100%)", // Dark gradient background
        color: "white",
        padding: "15px 30px", // Reduced padding to lower the height
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: "auto",
        boxShadow: "0 -3px 10px rgba(0, 0, 0, 0.6)",
        borderTop: "2px solid #ff9800", // Orange top border for branding
      }}
    >
      {/* Company Name */}
      <Typography
        variant="h5"
        component="p"
        sx={{
          fontWeight: "bold",
          fontFamily: "Red Hat Display, sans-serif",
          fontSize: "1.8rem", // Adjusted font size
          color: "#ff9800", // Vibrant orange color
          textShadow: "0 0 8px rgba(255, 152, 0, 0.8)", // Soft glow around text
          letterSpacing: "0.1rem",
        }}
      >
        Ethionyx
      </Typography>

      {/* Copyright Text */}
      <Typography
        variant="body2"
        component="p"
        sx={{
          fontFamily: "Red Hat Text, sans-serif",
          fontSize: "0.9rem", // Slightly smaller font for better balance
          color: "#ddd",
          letterSpacing: "0.03rem",
          marginRight: "30px",
        }}
      >
        &copy; {new Date().getFullYear()} Ethionyx IT Solutions. All rights reserved.
      </Typography>

      {/* Logo with Animation */}
      <Box
        component="img"
        src="/logo/logo_1.png"
        alt="Ethionyx Logo"
        sx={{
          width: 50, // Reduced size for logo
          height: 38, // Adjusted to scale proportionally
          borderRadius: "8px",
          objectFit: "contain",
          marginRight: "50px",
          boxShadow: "0 4px 12px rgba(255, 152, 0, 0.7)",
          transition: "transform 0.5s ease, box-shadow 0.5s ease",
          "&:hover": {
            transform: "scale(1.1) rotate(3deg)",
            boxShadow: "0 6px 18px rgba(255, 152, 0, 0.9)",
          },
        }}
      />
    </Box>
  );
};

export default Footer;
