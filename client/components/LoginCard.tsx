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
          Brace Yourself! Updated! With release tag again !!
        </Button>
      </CardActions>
    </Card>
  );
}
