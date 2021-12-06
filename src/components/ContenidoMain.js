/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from './Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

/**
 *  Componente principal que recibe por contexto valor planta
 *
 * @author: Ignacio Varas
 *
 */
function ContenidoMain() {
  const classes = useStyles();
  useEffect(() => {
    document.title = 'Dashboard | Maule 360';
  }, []);
  console.log('REACT_APP_BACKEND_URL:');
  console.log(process.env.REACT_APP_BACKEND_URL);
  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={12} xs={12}>
          <Tabs />
        </Grid>
      </Grid>
    </>
  );
}
export default ContenidoMain;
