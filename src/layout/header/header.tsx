import React, { useState, useEffect, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Menu, MenuItem, IconButton, Badge, Box, Button, Typography, Paper, Card, CardContent, Divider, ListItemIcon } from "@mui/material";
import { styled } from "@mui/system";
import NotificationCard from "./NotificationCard";
import { AiOutlineRobot, AiOutlineWarning, AiOutlineMail, AiOutlineCloudSync, AiOutlineBell, AiOutlineBug, AiOutlineCheckCircle, AiOutlineDownload } from "react-icons/ai";
import ProfileCard from "./ProfileCard";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [notificationAnchor, setNotificationAnchor] = useState<null | HTMLElement>(null);
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const sampleNotifications: Notification[] = [
    {
      id: 1,
      icon: <AiOutlineRobot />, // Replace with actual icons or SVGs
      title: "AI Workflow Completed",
      message: "Your AI workflow for Project X has successfully completed.",
      timestamp: "10 mins ago",
    },
    {
      id: 2,
      icon: <AiOutlineWarning />, // Example warning icon
      title: "System Alert",
      message: "Your subscription is about to expire. Please renew to avoid service interruptions.",
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      icon: <AiOutlineMail />, // Example email icon
      title: "New Message Received",
      message: "You have a new message from the support team regarding your recent query.",
      timestamp: "3 hours ago",
    },
    {
      id: 4,
      icon: <AiOutlineCloudSync />, // Sync or cloud-related icon
      title: "Cloud Backup Successful",
      message: "All project data has been successfully backed up to the cloud.",
      timestamp: "6 hours ago",
    },
    {
      id: 5,
      icon: <AiOutlineBell />, // Notification bell icon
      title: "Reminder",
      message: "Don’t forget to check your AI analytics report for the week.",
      timestamp: "Yesterday",
    },
    {
      id: 6,
      icon: <AiOutlineBug />, // Example bug icon
      title: "Error Detected",
      message: "A critical error was detected in your last AI workflow. Review the logs for more details.",
      timestamp: "2 days ago",
    },
    {
      id: 7,
      icon: <AiOutlineCheckCircle />, // Success or completed icon
      title: "Payment Successful",
      message: "Your payment for the AI Automation Pro plan has been processed.",
      timestamp: "3 days ago",
    },
    {
      id: 8,
      icon: <AiOutlineDownload />, // Example download icon
      title: "New Update Available",
      message: "A new update for the AI Automation software is available. Click here to download.",
      timestamp: "Last week",
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  useEffect(() => {
    setNotifications(sampleNotifications);
  }, []);

  const handleSignInSignUp = () => {
    navigate("/login");
  };

  const handleNotificationClick = (event: MouseEvent<HTMLElement>) => {
    setNotificationAnchor(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };

  const handleProfileClick = (event: MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    navigate("/login");
  };

  function toggleDrawer(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <HeaderWrapper>
      <LogoSection>
        <Logo />
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", letterSpacing: "0.1rem" }}>
          Dashboard
        </Typography>
        <IconButton onClick={toggleDrawer} sx={{ marginLeft: "10px", color: "#fff" }} aria-label="Menu">
          <MenuIcon />
        </IconButton>
      </LogoSection>

      <ActionsSection>
        {!isAuthenticated ? (
          <StyledButton variant="contained" onClick={handleSignInSignUp}>
            Sign In / Sign Up
          </StyledButton>
        ) : (
          <>
            <IconButton onClick={handleNotificationClick}>
              <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsIcon sx={{ fontSize: "28px", color: "#fff" }} />
              </Badge>
            </IconButton>

            <StyledMenu
              anchorEl={notificationAnchor}
              open={Boolean(notificationAnchor)}
              onClose={handleNotificationClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <NotificationCard notifications={notifications} />
            </StyledMenu>

            <IconButton onClick={handleProfileClick} sx={{ marginLeft: "10px" }} aria-label="Profile">
              <Avatar alt="User Profile" src="/profile-image.jpg" />
            </IconButton>

            <StyledMenu
              anchorEl={profileAnchor}
              open={Boolean(profileAnchor)}
              onClose={handleProfileClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <ProfileCard handleLogout={handleLogout} />
            </StyledMenu>
          </>
        )}
      </ActionsSection>
    </HeaderWrapper>
  );
};

export default Header;

const Logo: React.FC = () => (
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
);

// Styled components
const HeaderWrapper = styled("header")({
  width: "100%",
  height: "60px", // Reduced height
  padding: "0 20px",
  background: "linear-gradient(135deg, #1a1a1a 30%, #333 100%)", // Dark gradient similar to footer
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  zIndex: 10,
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.6)",
  borderBottom: "2px solid #ff9800", // Orange bottom border for consistency with the footer

});

const LogoSection = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ActionsSection = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "50px",
});

const StyledButton = styled(Button)({
  marginLeft: "10px",
  backgroundColor: "#ff9800",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#e68900",
  },
});

const StyledMenu = styled(Menu)({
  "& .MuiMenuItem-root:hover": {
    backgroundColor: "#444", // Dark hover effect for menu items
  },
});

