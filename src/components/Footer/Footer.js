import React from 'react';
import { Container, Typography, Grid, useMediaQuery, useTheme ,IconButton} from '@mui/material';
import { ArrowUpward as ArrowUpwardIcon, Facebook, Twitter, LinkedIn } from '@mui/icons-material';
const Footer = () => {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const gridItemStyle = {
    marginBottom: isSmScreen ? '20px' : '0',
     // Add margin at the bottom for small screens
  };

  return (
    <><Container maxWidth="lg" style={{ marginTop: '50px',backgroundImage:'white' }}>
              {/* Useful Links */}
              <Grid container spacing={2} alignItems="center" justifyContent="space-between">     
              <Grid item xs={12} md={6} lg={3} style={gridItemStyle}>
                  <Typography variant="h6" gutterBottom>
                      Useful Links
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      Privacy Policy
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      Refund & Cancellation Policy
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      Terms & Conditions
                  </Typography>
              </Grid>


              {/* Contact Information */}
              <Grid item xs={12} md={6} lg={3} style={{ ...gridItemStyle, alignSelf: 'flex-end' }}>
                  <Typography variant="h6" gutterBottom>
                      Contact Address India:
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      G-6,
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      New Delhi - 110092. INDIA
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      Phone- 8350535307
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      Website: https://Healthysolutions.com
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                      Email: info@Healthysolutions.com
                  </Typography>
              </Grid>

          </Grid>
      </Container>
      <LastFooter />
      </>
  );
};


const LastFooter = () => {
    const theme = useTheme();
    const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
    const gridItemStyle = {
      marginBottom: isSmScreen ? '20px' : '0', // Add margin at the bottom for small screens
    };
  
    const handleBackToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <footer>
        <Container maxWidth="lg" style={{ marginTop: '20px',backgroundColor:'lightgrey',color:'white' }}>
          {/* ... existing footer content ... */}
  
          {/* Small section below footer */}
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="body2" gutterBottom>
                © 2022 Healthy Solutions Pvt. Ltd. | All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="Facebook" color="primary">
                <Facebook />
              </IconButton>
              <IconButton aria-label="Twitter" color="primary">
                <Twitter />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="primary">
                <LinkedIn />
              </IconButton>
              <IconButton aria-label="Back to Top" onClick={handleBackToTop} color="primary">
                <ArrowUpwardIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Container>
      </footer>
    );
  };

export default Footer;
