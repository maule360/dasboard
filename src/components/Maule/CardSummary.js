/* eslint react/prop-types: 0 */

import {
  Card, CardContent, Grid, Typography,
} from '@mui/material';

export default function CardAtracciones(props) {
  const {
    title, value,
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
            <Typography
              color="textSecondary"
              variant="h5"
            >
              {value}
            </Typography>
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  );
}
