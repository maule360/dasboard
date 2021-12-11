/* eslint react/prop-types: 0 */

import {
  Card, CardContent, Grid,
} from '@mui/material';

export default function CardAtracciones() {
  return (
    <Card sx={{
      height: '100%',
    }}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'center' }}
        >
          <Grid item>
            <img
              alt="Under development"
              src="/images/maule360.png"
              style={{
                marginTop: 10,
                backgroundColor: '#A0A0A0',
                display: 'inline-block',
                maxWidth: '100%',
                width: 260,
              }}
            />
          </Grid>
        </Grid>

      </CardContent>
    </Card>
  );
}
