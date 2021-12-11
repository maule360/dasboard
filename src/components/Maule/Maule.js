/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  deepOrange, green, deepPurple, lightBlue, cyan, lime,
} from '@mui/material/colors';
import CardNombreApp from './CardNombreApp';
import Card from './Card';
import CardInstalls from './CardInstalls';
import CardSummary from './CardSummary';
import MauleContext from '../../contexto/Maule/MauleContext';

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: 3,
    borderRadius: 10,
    backgroundColor: theme.palette.primary.light,
    overflow: 'auto',
    minHeight: 800,
  },
  tab: {
    overflow: 'auto',
    padding: 10,
  },
  colorIcon: {
    color: theme.palette.secondary.main,
  },

}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const {
    getMauleData,
    dataMaule,
  } = useContext(MauleContext);
  useEffect(() => {
    getMauleData();
  }, []);
  useEffect(() => {
  }, [dataMaule]);
  const tituloCard1 = 'Summary App';
  const tituloCard2 = 'Version';
  const tituloCard3 = 'Updated';
  const tituloCard4 = 'Installs';
  const tituloCard5 = 'MaxInstalls';
  const tituloCard6 = 'MinInstalls';
  const tituloCard7 = 'Score';
  const tituloCard8 = 'Ratings';
  const tituloCard9 = 'Reviews';
  const tituloCard10 = 'Genre';
  return (

    <div className={classes.tab}>

      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <CardNombreApp />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardSummary
            title={tituloCard1}
            value={dataMaule.summary}
            color="success.main"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardSummary
            title={tituloCard2}
            value={dataMaule.version}
            color="success.main"
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardSummary
            title={tituloCard3}
            value={dataMaule.updated}
            color="success.main"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <CardInstalls
            title={tituloCard4}
            value={dataMaule.installs}
            color={green[500]}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardInstalls
            title={tituloCard5}
            value={dataMaule.maxInstalls}
            color={deepOrange[500]}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardInstalls
            title={tituloCard6}
            value={dataMaule.minInstalls}
            color={deepPurple[500]}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardInstalls
            title={tituloCard7}
            value={dataMaule.scoreText}
            color={lightBlue[500]}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item md={3} xs={12}>
          <CardInstalls
            title={tituloCard8}
            value={dataMaule.ratings}
            color={cyan[500]}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardInstalls
            title={tituloCard9}
            value={dataMaule.reviews}
            color={lime[500]}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <CardSummary
            title={tituloCard10}
            value={dataMaule.genre}
          />
        </Grid>

      </Grid>

    </div>

  );
}
