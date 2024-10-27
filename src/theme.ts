import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFA500',  // Light orange
    },
    secondary: {
      main: '#FFD700',  // Gold
    },
    background: {
      default: '#FFFFFF',  // White background
      paper: '#F5F5F5',  // Off-white for cards and containers
    },
    text: {
      primary: '#003366',  // Dark blue text
      secondary: '#1A1A1A',  // Bluish-black for secondary text
    },
    action: {
      active: '#FFD700', // Gold for active elements
      hover: '#FFA500', // Light orange on hover
    },
    border: {
      main: '#003366', // Dark blue borders
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#003366', // Dark blue text for button
          border: '1px solid #003366', // Dark blue border
          '&:hover': {
            backgroundColor: '#FFD700', // Gold on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #FFA500', // Light orange border
          backgroundColor: '#F5F5F5', // Slightly off-white for card background
          color: '#003366', // Dark blue text
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#003366', // Dark blue background for AppBar
          color: '#FFFFFF',  // White text
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: '1px solid #003366', // Dark blue border for table
        },
        head: {
          backgroundColor: '#FFA500', // Light orange for header row
          color: '#FFFFFF', // White text in header
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFD700', // Gold background for alerts
          color: '#003366',  // Dark blue text
          borderLeft: '4px solid #003366', // Dark blue left border
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F5F5F5', // Off-white for sidebar
          color: '#003366',  // Dark blue text
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#003366',  // Dark blue border for text fields
            },
            '&:hover fieldset': {
              borderColor: '#FFA500', // Light orange on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFD700', // Gold when focused
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#F5F5F5',  // Light background for dialog
          border: '1px solid #003366',  // Dark blue border
          color: '#003366', // Dark blue text
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFA500', // Light orange background for chips
          color: '#003366', // Dark blue text for chips
          border: '1px solid #003366', // Dark blue border
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#003366', // Dark blue background for tooltip
          color: '#FFD700', // Gold text
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-root': {
            color: '#003366', // Dark blue for inactive tabs
            '&.Mui-selected': {
              color: '#FFD700', // Gold for selected tabs
            },
          },
          indicator: {
            backgroundColor: '#FFA500', // Light orange indicator for active tab
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: '#FFD700', // Gold for badge background
          color: '#003366',  // Dark blue for badge text
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700',  // Gold for primary color
    },
    secondary: {
      main: '#FFA500',  // Light orange for secondary color
    },
    background: {
      default: '#001F3F',  // Blue-black for background
      paper: '#002B4F',  // Darker blue for cards and containers
    },
    text: {
      primary: '#FFFFFF',  // White text for readability
      secondary: '#B0C4DE',  // Light steel blue for secondary text
    },
    action: {
      active: '#FFA500', // Light orange for active elements
      hover: '#FFD700', // Gold on hover
    },
    border: {
      main: '#FFA500', // Light orange for borders
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFD700', // Gold text for button
          border: '1px solid #FFA500', // Light orange border
          '&:hover': {
            backgroundColor: '#003366', // Dark blue on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid #FFD700', // Gold border
          backgroundColor: '#002B4F', // Darker blue background
          color: '#FFFFFF', // White text
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#003366', // Dark blue for AppBar
          color: '#FFD700',  // Gold text
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: '1px solid #FFA500', // Light orange for table border
        },
        head: {
          backgroundColor: '#FFD700', // Gold for header row
          color: '#003366', // Dark blue text in header
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          backgroundColor: '#003366', // Dark blue for alert background
          color: '#FFD700',  // Gold text
          borderLeft: '4px solid #FFA500', // Light orange left border
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#001F3F', // Blue-black for sidebar
          color: '#FFD700',  // Gold text
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#FFA500',  // Light orange border for text fields
            },
            '&:hover fieldset': {
              borderColor: '#FFD700', // Gold on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#003366', // Dark blue when focused
            },
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#002B4F',  // Darker blue background for dialog
          border: '1px solid #FFD700',  // Gold border
          color: '#FFFFFF', // White text
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFA500', // Light orange for chips
          color: '#003366', // Dark blue text
          border: '1px solid #FFD700', // Gold border
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#FFD700', // Gold background for tooltip
          color: '#003366', // Dark blue text
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-root': {
            color: '#FFFFFF', // White for inactive tabs
            '&.Mui-selected': {
              color: '#FFD700', // Gold for selected tabs
            },
          },
          indicator: {
            backgroundColor: '#FFA500', // Light orange indicator for active tab
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: '#FFA500', // Light orange for badge background
          color: '#003366',  // Dark blue for badge text
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
