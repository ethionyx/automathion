import React from 'react';
import { Paper, Box, Avatar, Typography, Divider, MenuItem, ListItemIcon } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const ProfileCard: React.FC<{ handleLogout: () => void }> = ({ handleLogout }) => {
    const navigate = useNavigate();

    return (
        <Paper
            sx={{
                width: "240px",
                padding: "20px",
                borderRadius: "12px",
                backgroundColor: "#2e3a47",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                '&:hover': {
                    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
                },
            }}
        >
            {/* User Info Section */}
            <Box display="flex" alignItems="center" marginBottom="15px">
                <Avatar
                    alt="User"
                    src="/profile-image.jpg"
                    sx={{ width: 56, height: 56, marginRight: "12px", border: "2px solid #ff9800" }}
                />
                <Box>
                    <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 'bold' }}>John Doe</Typography>
                    <Typography variant="body2" sx={{ color: "#b0bec5" }}>Premium Member</Typography>
                </Box>
            </Box>

            <Divider sx={{ borderColor: "#4f5b62", marginBottom: "15px" }} />

            {/* Menu Options */}
            <MenuItem
                onClick={() => navigate("/account")}
                sx={{
                    color: "#ffffff",
                    '&:hover': { backgroundColor: "#394a59" },
                }}
            >
                <ListItemIcon>
                    <AccountCircleIcon sx={{ color: "#ff9800" }} />
                </ListItemIcon>
                <Typography variant="body1">My Account</Typography>
            </MenuItem>

            <MenuItem
                onClick={() => navigate("/settings")}
                sx={{
                    color: "#ffffff",
                    '&:hover': { backgroundColor: "#394a59" },
                }}
            >
                <ListItemIcon>
                    <SettingsIcon sx={{ color: "#ff9800" }} />
                </ListItemIcon>
                <Typography variant="body1">Settings</Typography>
            </MenuItem>

            <MenuItem
                onClick={handleLogout}
                sx={{
                    color: "#ffffff",
                    '&:hover': { backgroundColor: "#394a59" },
                }}
            >
                <ListItemIcon>
                    <LogoutIcon sx={{ color: "#ff9800" }} />
                </ListItemIcon>
                <Typography variant="body1">Log Out</Typography>
            </MenuItem>
        </Paper>
    );
};

export default ProfileCard;
