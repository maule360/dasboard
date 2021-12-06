/* eslint react/prop-types: 0 */

import {
  Avatar, Card, CardContent, Grid, Typography,
} from '@mui/material';

export default function CardAtracciones(props) {
  const {
    title, value, color,
  } = props;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              {title}
            </Typography>
            <Avatar
              sx={{
                backgroundColor: color,
                height: 56,
                width: 56,
              }}
            >
              <Typography
                color="white"
                variant="h4"
              >
                {value}
              </Typography>
            </Avatar>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  );
}
