import React from 'react';
import { Box, Typography, Divider, Button, TextField, InputAdornment } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';

const PageHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3, // Reduced padding
        mb: 4,
        background: 'linear-gradient(135deg, rgba(255,175,120,1) 0%, rgba(255,205,180,1) 100%)', // Lighter gradient
        borderRadius: '12px',
        color: '#333', // Lighter text color
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.1)', // Softer shadow
      }}
    >
      {/* Icon and Title with Search Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          mb: 2,
        }}
      >
        {/* Icon and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AutoFixHighIcon sx={{ fontSize: 40, mr: 1 }} /> {/* Reduced icon size */}
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.8rem', // Reduced title size
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            AI Automation Workshop
          </Typography>
        </Box>

        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search Projects"
          size="small"
          sx={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            width: '250px',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(0,0,0,0.1)',
              },
              '&:hover fieldset': {
                borderColor: 'rgba(0,0,0,0.2)',
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: '750px',
          textAlign: 'center',
          fontSize: '1rem', // Reduced font size
          mb: 2,
          opacity: 0.85,
          lineHeight: 1.4,
        }}
      >
        Discover cutting-edge AI solutions to automate workflows and boost productivity. Dive into active projects and be part of AI innovation.
      </Typography>

      {/* Call to Action */}
      <Button
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#333', // Darker text color for contrast
          fontWeight: 'bold',
          textTransform: 'uppercase',
          px: 3,
          py: 1.5, // Reduced button size
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)', // Softer shadow
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.35)',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        Explore Projects
      </Button>

      {/* Divider */}
      <Divider sx={{ width: '80%', my: 3, borderColor: 'rgba(0, 0, 0, 0.1)' }} />
    </Box>
  );
};

export default PageHeader;
