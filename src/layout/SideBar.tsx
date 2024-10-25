import React from 'react';
import {
    Box,
    List,
    ListItem,
    IconButton,
    Menu,
    MenuItem,
    Switch,
    Typography,
    Divider,
    ListItemIcon,
    ListItemText,
    styled,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Light theme icon
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Dark theme icon
import { Project } from '../shared/types';

// Custom Switch styled with orange color
const OrangeSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
        color: '#ff6600',
        '&:hover': {
            backgroundColor: 'rgba(255, 102, 0, 0.1)',
        },
        '&.Mui-checked': {
            color: '#ff6600',
            '&:hover': {
                backgroundColor: 'rgba(255, 102, 0, 0.1)',
            },
        },
    },
    '& .MuiSwitch-track': {
        backgroundColor: '#ffb84d',
    },
}));

const Sidebar = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false); // State for theme
    const [projects] = React.useState<Project[]>([
        {
            id: 1, name: 'Project 1',
            description: '',
            tools: [],
            flow: [],
            credentials: [],
            valueIds: [],
            icon: '',
            contributors: [],
            activatedDate: undefined,
            status: 'active'
        },
        {
            id: 2, name: 'Project 2',
            description: '',
            tools: [],
            flow: [],
            credentials: [],
            valueIds: [],
            icon: '',
            contributors: [],
            activatedDate: undefined,
            status: 'active'
        },
        {
            id: 3, name: 'Project 3',
            description: '',
            tools: [],
            flow: [],
            credentials: [],
            valueIds: [],
            icon: '',
            contributors: [],
            activatedDate: undefined,
            status: 'active'
        },
    ]);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleSwitchChange = () => {
        setIsDarkTheme((prev) => !prev); // Toggle the theme state
    };

    const handleSelect = (option: string) => {
        console.log(`${option} selected`);
    };

    const handleProjectSelect = (project: Project) => {
        console.log(`${project.name} selected`);
    };

    const handleAddProject = () => {
        console.log('Add New Project clicked');
    };

    return (
        <Box
            sx={{
                width: 260,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRight: '2px solid #e0e0e0',
                height: '100vh',
                bgcolor: '#fafafa',
                boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
                background: 'linear-gradient(to right, #ffffff, #f5f5f5)',
                fontSize: '1.2rem', // Increased font size for overall sidebar
            }}
        >
            {/* Top Section: Company Name & Logo */}
            <Box
                sx={{
                    p: 3,
                    bgcolor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    borderBottom: '1px solid #e0e0e0',
                    borderRadius: '0 10px 10px 0',
                }}
            >
                <img
                    src="/logo/logo_1.png"
                    alt="Company Logo"
                    style={{ width: '40px', borderRadius: '50%' }}
                />
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#ff6600', fontSize: '1.5rem' }}
                >
                    Ethonyx
                </Typography>
            </Box>

            {/* Middle Section: Home, Project List */}
            <List sx={{ p: 2 }}>
                <ListItem
                    onClick={() => handleSelect('Home')}
                    sx={{
                        mb: 2,
                        borderRadius: 2,
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            bgcolor: '#ffefd5',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    <ListItemIcon>
                        <HomeIcon sx={{ color: '#ff6600', fontSize: 30 }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" primaryTypographyProps={{ fontSize: '1.2rem' }} />
                </ListItem>

                <Typography
                    variant="subtitle1"
                    sx={{ color: '#666', mb: 1, fontWeight: 'bold', fontSize: '1.2rem' }}
                >
                    Projects
                </Typography>

                {/* Add New Project List Item */}
                <ListItem
                    onClick={handleAddProject}
                    sx={{
                        mb: 1,
                        borderRadius: 2,
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            bgcolor: '#ffefd5',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    <ListItemIcon>
                        <AddCircleOutlineIcon sx={{ color: '#ff6600', fontSize: 30 }} />
                    </ListItemIcon>
                    <ListItemText primary="Add New Project" primaryTypographyProps={{ fontSize: '1.2rem' }} />
                </ListItem>

                {projects.slice(0, 3).map((project) => (
                    <ListItem
                        key={project.id}
                        onClick={() => handleProjectSelect(project)}
                        sx={{
                            mb: 1,
                            borderRadius: 2,
                            transition: 'background-color 0.3s',
                            '&:hover': {
                                bgcolor: '#ffefd5',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                transform: 'scale(1.02)',
                            },
                        }}
                    >
                        <ListItemIcon>
                            <FolderIcon sx={{ color: '#ff6600', fontSize: 30 }} />
                        </ListItemIcon>
                        <ListItemText primary={project.name} primaryTypographyProps={{ fontSize: '1.2rem' }} />
                    </ListItem>
                ))}

                <ListItem
                    onClick={() => handleSelect('allProject')}
                    sx={{
                        borderRadius: 2,
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            bgcolor: '#ffefd5',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    <ListItemIcon>
                        <ExpandMoreIcon sx={{ color: '#ff6600', fontSize: 30 }} />
                    </ListItemIcon>
                    <ListItemText primary="See More" primaryTypographyProps={{ fontSize: '1.2rem' }} />
                </ListItem>
            </List>

            {/* Credentials and Templates */}
            <Divider sx={{ mt: 2 }} />
            <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" sx={{ color: '#666', mb: 1, fontWeight: 'bold', fontSize: '1.2rem' }}>
                    Resources
                </Typography>
                <ListItem
                    onClick={() => handleSelect('Templates')}
                    sx={{
                        borderRadius: 2,
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            bgcolor: '#ffefd5',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    <ListItemIcon>
                        <FolderIcon sx={{ color: '#ff6600', fontSize: 30 }} />
                    </ListItemIcon>
                    <ListItemText primary="Templates" primaryTypographyProps={{ fontSize: '1.2rem' }} />
                </ListItem>

                <ListItem
                    onClick={() => handleSelect('Credentials')}
                    sx={{
                        borderRadius: 2,
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            bgcolor: '#ffefd5',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            transform: 'scale(1.02)',
                        },
                    }}
                >
                    <ListItemIcon>
                        <VpnKeyIcon sx={{ color: '#ff6600', fontSize: 30 }} />
                    </ListItemIcon>
                    <ListItemText primary="Credentials" primaryTypographyProps={{ fontSize: '1.2rem' }} />
                </ListItem>
            </Box>

            {/* Bottom Section: Theme Switch and User Profile */}
            {/* Bottom Section: Theme Switch, User Section */}
            <Box sx={{ p: 2 }}>
                {/* Theme Switch */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 3,
                    }}
                >
                    {/* Light Theme Icon */}
                    {isDarkTheme ? (
                        <DarkModeIcon sx={{ color: '#ff6600', fontSize: 24, ml: 1 }} /> // Add margin left to the icon
                    ) : (
                        <WbSunnyIcon sx={{ color: '#ff6600', fontSize: 24, ml: 1 }} /> // Add margin left to the icon
                    )}

                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold', fontSize: '1.1rem', mx: 1 }}>
                        Theme
                    </Typography>

                    <OrangeSwitch checked={isDarkTheme} onChange={handleSwitchChange} />
                </Box>

                {/* User Section: Icon and 3-Dot Menu */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <AccountCircleIcon
                        fontSize="large"
                        sx={{ color: '#ff6600', cursor: 'pointer' }}
                        onClick={(e: any) => handleMenuClick(e)}
                    />

                    <Typography variant="body2" sx={{ color: '#666', fontWeight: 'bold', fontSize: '1.1rem', mx: 1 }}>
                        use A
                    </Typography>
                    <IconButton onClick={handleMenuClick}>
                        <MoreVertIcon sx={{ color: '#ff6600' }} />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
