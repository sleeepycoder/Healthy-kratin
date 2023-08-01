import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box, Grid } from '@mui/material';

const Plane = () => {
  // Placeholder data for personalized fitness plans (You can replace this with real data)
  const personalizedPlans = [
    {
      title: 'Low-Impact Yoga Routine',
      description: 'A gentle yoga routine for improving flexibility and relaxation.',
    },
    {
      title: 'Gentle Aerobics Workout',
      description: 'A low-impact aerobics workout to improve cardiovascular health.',
    },
    // Add more personalized fitness plans here
  ];

  // Placeholder data for the calendar (You can integrate a real calendar library here)
  const calendarData = [
    { date: '2023-07-15', activity: 'Low-Impact Yoga Routine' },
    { date: '2023-07-17', activity: 'Gentle Aerobics Workout' },
    // Add more calendar activities here
  ];

  const handleAddToCalendar = () => {
    // Display a reminder when the button is clicked
    window.alert('Don\'t forget to add the activity to your Google Calendar!');
  };

  return (
    <Container maxWidth="md"  style={{ marginTop: '60px',marginBottom:'30px' }}>
      <Typography variant="h4" align='center' style={{ color: 'red' }} gutterBottom>
        Personalized Fitness Plans
      </Typography>
      <Grid container spacing={2}>
        {personalizedPlans.map((plan, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6">{plan.title}</Typography>
                <Typography variant="body1">{plan.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom style={{ marginTop: '2rem' }}>
        Daily Activity Calendar
      </Typography>
      {calendarData.map((activity, index) => (
        <Card key={index} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{activity.date}</Typography>
            <Typography variant="body1">{activity.activity}</Typography>
          </CardContent>
        </Card>
      ))}
      <Box mt={2}>
        {/* Add link to Google Calendar */}
        <a
          href="https://calendar.google.com/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // For security best practices
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" color="primary" onClick={handleAddToCalendar}>
            Add Activity to Calendar
          </Button>
        </a>
      </Box>
    </Container>
  );
};

export default Plane;
