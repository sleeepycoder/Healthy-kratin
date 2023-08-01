import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box, Grid } from '@mui/material';

const MealPlanner = () => {
  // Placeholder data for meal plans (You can replace this with real data)
  const mealPlans = [
    {
      title: 'Vegetarian Breakfast',
      description: 'A nutritious vegetarian breakfast to start your day.',
      timeSlot: 'Morning',
      time: '8:00 AM',
      recipes: [
        {
          recipeTitle: 'Fruit Salad',
          recipeDescription: 'A refreshing mix of seasonal fruits.',
        },
        {
          recipeTitle: 'Oatmeal with Nuts and Berries',
          recipeDescription: 'A warm bowl of oatmeal topped with nuts and berries.',
        },
      ],
    },
    {
      title: 'Low-Carb Lunch',
      description: 'A low-carb lunch suitable for individuals with diabetes.',
      timeSlot: 'Afternoon',
      time: '1:00 PM',
      recipes: [
        {
          recipeTitle: 'Grilled Chicken Salad',
          recipeDescription: 'A healthy salad with grilled chicken and mixed greens.',
        },
        {
          recipeTitle: 'Zucchini Noodles with Pesto',
          recipeDescription: 'Low-carb zucchini noodles served with homemade pesto.',
        },
      ],
    },
    {
      title: 'Healthy Snacks',
      description: 'A selection of healthy snacks for a quick energy boost.',
      timeSlot: 'Evening',
      time: '4:00 PM',
      recipes: [
        {
          recipeTitle: 'Greek Yogurt with Honey and Almonds',
          recipeDescription: 'Creamy Greek yogurt drizzled with honey and topped with almonds.',
        },
        {
          recipeTitle: 'Veggie Sticks with Hummus',
          recipeDescription: 'Assorted vegetable sticks served with delicious hummus.',
        },
      ],
    },
    {
      title: 'Dinner Delight',
      description: 'A delicious and healthy dinner to end your day.',
      timeSlot: 'Night',
      time: '7:00 PM',
      recipes: [
        {
          recipeTitle: 'Baked Salmon with Steamed Veggies',
          recipeDescription: 'Flavorful baked salmon accompanied by a medley of steamed vegetables.',
        },
        {
          recipeTitle: 'Quinoa-Stuffed Bell Peppers',
          recipeDescription: 'Bell peppers stuffed with nutritious quinoa and vegetables.',
        },
      ],
    },
    // Add more meal plans here for different time slots
  ];

  // Placeholder data for recipes (You can replace this with real data)
  const recipes = [
    {
      title: 'Vegetarian Pasta Salad',
      description: 'A delicious and healthy pasta salad with vegetables.',
    },
    {
      title: 'Grilled Chicken with Vegetables',
      description: 'A flavorful grilled chicken recipe served with fresh vegetables.',
    },
    // Add more recipes here
  ];

  const Viewmore = () => {
    // Display a reminder when the button is clicked
    window.alert('Wait connecting to Page');
  };


  return (
    <Container maxWidth="md" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Meal Planner
      </Typography>
      <Grid container spacing={2}>
        {mealPlans.map((plan, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card style={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6">{plan.timeSlot}</Typography>
                <Typography variant="h6">{plan.title}</Typography>
                <Typography variant="body1">{plan.description}</Typography>
                <Typography variant="subtitle2">{plan.time}</Typography>
                <Typography variant="h6" style={{ marginTop: '1rem' }}>
                  Recipes:
                </Typography>
                {plan.recipes.map((recipe, recipeIndex) => (
                  <div key={recipeIndex}>
                    <Typography variant="subtitle1">{recipe.recipeTitle}</Typography>
                    <Typography variant="body2">{recipe.recipeDescription}</Typography>
                    <br />
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" gutterBottom style={{ marginTop: '2rem' }}>
        Easy-to-Follow Recipes
      </Typography>
      {recipes.map((recipe, index) => (
        <Card key={index} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h6">{recipe.title}</Typography>
            <Typography variant="body1">{recipe.description}</Typography>
          </CardContent>
        </Card>
      ))}
      <Box mt={2}>
      <a
          href="https://www.healthyfood.com/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // For security best practices
          style={{ textDecoration: 'none' }}
        >
          <Button variant="contained" color="primary" onClick={Viewmore}>
            Viewmore
          </Button>
        </a>
      </Box>
    </Container>
  );
};

export default MealPlanner;
