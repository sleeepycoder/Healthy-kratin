import React from 'react';
import { Container, Typography, Avatar, Card, CardContent,Box,Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const userData = {
    name: 'Sunita Sharma',
    age: 65,
    gender: 'Female',
    medicalCondition: 'Hypertension',
    allergies: 'Pollen, Nuts',
    medications: 'Blood pressure medication',
    fitnessProgress: 'Improving stamina',
    achievements: 'Consistent exercise for 6 months',
  };


const Profile = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '70px' }}>
      <Typography variant="h4" gutterBottom align='center' style={{color:'red'}}>
        User Profile
      </Typography>
      <Card style={{ marginBottom: '1rem' }}>
        <CardContent>
          <Avatar
            alt="User Avatar"
            src="path/to/small-avatar-image.jpg" // Replace with the URL of the small image
            style={{ width: '80px', height: '80px', margin: 'auto' }}
          />
          <Typography variant="h6">{userData.name}</Typography>
          <Typography variant="body1">Age: {userData.age}</Typography>
          <Typography variant="body1">Gender: {userData.gender}</Typography>
          <Typography variant="body1">Medical Condition: {userData.medicalCondition}</Typography>
          <Typography variant="body1">Allergies: {userData.allergies}</Typography>
          <Typography variant="body1">Medications: {userData.medications}</Typography>
          <Typography variant="body1">Fitness Progress: {userData.fitnessProgress}</Typography>
          <Typography variant="body1">Achievements: {userData.achievements}</Typography>
        </CardContent>
        <Box m={3} display="flex"  sx={{ '& button': { m: 1 } }} justifyContent="flex-end">
          <Button variant="outlined"  color="primary" type="submit">
        Print
          </Button>
          <Button variant="outlined"  startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="outlined"  endIcon={<SendIcon />}>
  Send
</Button>
        </Box>
      </Card>
     
    </Container>
  );
};

export default Profile;
