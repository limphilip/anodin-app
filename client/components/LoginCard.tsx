import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

export default function LoginCard() {
  return (
    <Card>
      <CardContent>
        <Typography>Boo</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Brace Yourself! Test from DockerHub CI/CD ! 
        </Button>
      </CardActions>
    </Card>
  );
}
