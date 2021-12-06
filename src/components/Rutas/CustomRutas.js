/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect, useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import RutasContext from '../../contexto/Rutas/RutasContext';
import Card from './Card';
import Tablenew from './Table';

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
  cards: {
    paddingBottom: 30,
  },
  button: {
    width: '100%',
    height: 40,
    color: theme.palette.secondary.main,
    background: theme.palette.primary.light,
  },
  colorIcon: {
    color: theme.palette.secondary.main,
  },
  div: {
    paddingBottom: 8,
  },
  titulo: {
    paddingBottom: 10,
  },
  divTable: {
    paddingLeft: 70,
    paddingRight: 50,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const {
    getListaRutas,
    dataListaRutas,
    totalRutas,
    totalComunasRutas,
    totalProvinciaRutas,
    totalTipoRutas,
  } = useContext(RutasContext);
  useEffect(() => {
    getListaRutas();
  }, []);

  const Contenido = (
    (dataListaRutas.length > 0)
      ? (
        <div className={classes.div}>

          <div>
            <Grid container className={classes.cards} spacing={2}>
              <Grid item md={3} xs={12}>
                <Card
                  title="Total Rutas"
                  value={totalRutas}
                  color="success.main"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Card
                  title="Total Comunas"
                  value={totalComunasRutas}
                  color="warning.main"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Card
                  title="Total Provincias"
                  value={totalProvinciaRutas}
                  color="primary.main"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Card
                  title="Total Tipo Rutas"
                  value={totalTipoRutas}
                  color="error.main"
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.titulo}>
            <Typography color="primary" variant="h5">
              LISTADO RUTAS
            </Typography>
          </div>
          <div className={classes.div}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6} xs={12}>
                <Tablenew
                  rows={dataListaRutas}
                  cols={['Ruta', 'Descripcion', 'Comuna', 'Provincia']}
                />
              </Grid>
              <Grid item md={6} xs={12} />
            </Grid>
          </div>
        </div>
      )
      : <>Loading</>

  );

  return (<>{ Contenido }</>
  );
}
