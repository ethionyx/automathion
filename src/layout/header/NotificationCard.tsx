import React from 'react';
import { Box, Card, CardContent, Typography, Button, IconButton, Tooltip } from '@mui/material';
import { Notification } from "../../shared/types";
import { CheckCircleOutline } from '@mui/icons-material';

const NotificationCard: React.FC<{ notifications: Notification[] }> = ({ notifications }) => (
  <Card
    sx={{
      backgroundColor: '#1f2a38', // Darker background for modern feel
      borderRadius: '12px', // Smaller corner radius
      padding: '16px', // Reduced padding
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Slightly lighter shadow
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        transform: 'scale(1.01)', // Subtle scaling on hover
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)', // Lighter shadow on hover
      },
    }}
  >
    <CardContent>
      {notifications.map((notification, index) => (
        <Box
        key={notification.id}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="12px" // Reduced padding inside each notification
        sx={{
          backgroundColor: index % 2 === 0 ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
          borderRadius: '8px', // Smaller radius for notification items
          marginBottom: '8px', // Reduced margin between items
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Lighter shadow for raised effect
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle hover effect
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          },
        }}
        >
          {/* Notification Icon */}
          <Box
            sx={{
              backgroundColor: '#ff9800', // Vibrant orange for the icon background
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '36px', // Reduced size
              height: '36px',
              color: '#ffffff',
              fontSize: '1.25rem', // Slightly smaller icon font size
            }}
          >
            {notification.icon}
          </Box>

          {/* Notification Message */}
          <Box sx={{ marginLeft: '12px', flexGrow: 1 }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: '1rem', // Reduced font size for title
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)', // Subtle text shadow
                mb: '2px', // Reduced margin below title
              }}
            >
              {notification.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#b0bec5', // Softer, contrasting color for description
                fontSize: '0.85rem', // Reduced font size for message
                lineHeight: '1.4',
              }}
            >
              {notification.message}
            </Typography>
          </Box>

          {/* Timestamp */}
          <Typography
            variant="caption"
            sx={{
              color: '#90a4ae', // Lighter color for timestamp
              fontSize: '0.75rem', // Smaller font size
              marginLeft: '16px', // Space between message and timestamp
              alignSelf: 'flex-start', // Align at the top
            }}
          >
            {notification.timestamp}
          </Typography>

          {/* Action Button */}
          {/* Iconic 'Mark as Read' Button with Tooltip */}
          <Tooltip title="Mark as Read" arrow>
            <IconButton
              color="primary"
              sx={{
                backgroundColor: '#64b5f6',
                color: '#ffffff',
                marginLeft: '12px',
                '&:hover': {
                  backgroundColor: '#42a5f5',
                },
              }}
              onClick={() => {
                // Handle 'Mark as Read' click
                console.log('Mark as read clicked for', notification.id);
              }}
            >
              <CheckCircleOutline />
            </IconButton>
          </Tooltip>
        </Box>
      ))}
    </CardContent>
  </Card>
);

export default NotificationCard;
