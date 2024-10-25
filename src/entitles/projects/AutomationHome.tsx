import React from 'react';
import { Box, Card, CardContent, Typography, Divider, Grid, Avatar, Button } from '@mui/material';
import { AiOutlineRobot } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import PageHeader from '../../layout/PageHeader';
import { selectProjects } from './projectSlice';

const AutomationHome = () => {
    // Get the project list from the Redux store
    const projects = useSelector(selectProjects);
   // const history = useHistory(); // Hook to manage navigation

    // Handle project card click
    const handleProjectClick = (project:any) => {
        // Navigate to the project detail page with the project's ID
     //   history.push(`/projects/${project.id}`);
    };

    // Handle creating a new project
    const handleNewProject = () => {
        // Navigate to the new project creation page
     //   history.push('/projects/new');
    };

    // Handle see more projects
    const handleSeeMore = () => {
        // Navigate to the all projects page
     //   history.push('/projects');
    };

    return (
        <Box sx={{ p: 2, backgroundColor: '#f8f9fa', minHeight: '100vh', position: 'relative' }}>
            {/* Header */}
            <PageHeader />

            {/* Active Projects Section */}
            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    background: 'linear-gradient(45deg, #ffb74d, #ff9800)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15rem',
                    fontSize: '1.5rem',
                    lineHeight: '1.3',
                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'transform 0.3s, color 0.3s',
                    '&:hover': {
                        textShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                    },
                    ml: 2,
                    pl: 0,
                }}
            >
                Active Projects
            </Typography>

            <Grid container spacing={2}>
                {projects.slice(0, 3).map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card
                            sx={{
                                borderRadius: '12px',
                                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                                },
                                cursor: 'pointer',
                            }}
                            onClick={() => handleProjectClick(project)} // Use the click handler
                        >
                            <CardContent sx={{ p: 2 }}>
                                {/* Project Header */}
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                    {project.icon && (
                                        <Box
                                            sx={{
                                                backgroundColor: '#007bff',
                                                borderRadius: '8px',
                                                padding: '8px',
                                                mr: 1,
                                            }}
                                        >
                                            {project.icon}
                                        </Box>
                                    )}
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#212529', flexGrow: 1 }}>
                                        {project.name}
                                    </Typography>
                                    <Box
                                        sx={{
                                            backgroundColor: project.status === 'active' ? '#28a745' : '#dc3545',
                                            color: '#ffffff',
                                            borderRadius: '20px',
                                            padding: '4px 10px',
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                                            {project.status}
                                        </Typography>
                                    </Box>
                                </Box>

                                {/* Deadline */}
                                <Typography variant="body2" sx={{ color: '#495057', mb: 1 }}>
                                    <strong>Activated Date:</strong> {project.activatedDate}
                                </Typography>

                                {/* Contributors Section */}
                                <Typography variant="subtitle2" sx={{ color: '#6c757d', mb: 0.5 }}>
                                    Contributors:
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                                    {project.contributors.map((contributor, index) => (
                                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                            <Avatar
                                                src={'/logo/logo_1.png'}
                                                alt={contributor.firstName}
                                                sx={{ width: 24, height: 24, border: '1px solid #ced4da' }}
                                            />
                                            <Typography variant="body2" sx={{ color: '#333', fontWeight: 'bold' }}>
                                                {contributor.firstName}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                                {/* Project Description */}
                                <Divider sx={{ my: 1 }} />
                                <Typography variant="body2" sx={{ color: '#6c757d', mt: 1 }}>
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Buttons Section */}
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={handleSeeMore} // Use the see more handler
                    sx={{
                        borderRadius: '24px',
                        padding: '10px 24px',
                        fontSize: '1rem',
                        background: 'linear-gradient(45deg, #ffb74d, #ff9800)',
                        color: '#fff',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                        minWidth: 250,
                        transition: 'background 0.3s, transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #ffa726 30%, #fb8c00 90%)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                            transform: 'scale(1.05)',
                        },
                        '&:active': {
                            transform: 'scale(0.95)',
                        },
                        mx: 1,
                    }}
                >
                    See More
                </Button>

                <Button
                    variant="outlined"
                    size="large"
                    onClick={handleNewProject} // Use the new project handler
                    sx={{
                        borderRadius: '24px',
                        padding: '10px 24px',
                        fontSize: '1rem',
                        background: 'linear-gradient(45deg, #ffb74d, #ff9800)',
                        color: '#fff',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
                        minWidth: 250,
                        transition: 'background 0.3s, transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #ffa726 30%, #fb8c00 90%)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                            transform: 'scale(1.05)',
                        },
                        '&:active': {
                            transform: 'scale(0.95)',
                        },
                        mx: 1,
                    }}
                >
                    + Add New Project
                </Button>
            </Box>

            {/* Decorative AI Icon and Slogan */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '70px',
                    right: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
                }}
            >
                <AiOutlineRobot size={40} color="#007bff" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                    Automate your processes
                </Typography>
            </Box>
        </Box>
    );
};

export default AutomationHome;
