import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';

const HealthInfo = () => {
  // Sample data for articles and tips (You can replace this with actual data from a backend or API)
  const articles = [
    {
      title: 'Benefits of Exercise for Seniors',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'Healthy Eating Habits in Older Adults',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // Add more articles here
  ];

  const tips = [
    {
      title: 'Maintaining a Balanced Diet',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      title: 'Stress Management Techniques',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    // Add more tips here
  ];

  return (
 


   

  <Container maxWidth="md" style={{ marginTop: '60px' }}>
        <Typography variant="h3" align='center' style={{color:'red'}}>Healthy Living for Seniors</Typography>
  <Typography variant="h4" gutterBottom>
        Health Information
      </Typography>
      <Typography variant="h4" gutterBottom>
        Articles
      </Typography>
      {articles.map((article, index) => (
        <Card key={index} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{article.title}</Typography>
            <Typography variant="body1">{article.content}</Typography>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h4" gutterBottom>
        Tips
      </Typography>
      {tips.map((tip, index) => (
        <Card key={index} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{tip.title}</Typography>
            <Typography variant="body1">{tip.content}</Typography>
          </CardContent>
        </Card>
      ))}
  </Container>


  
     

  );
};

export default HealthInfo;
