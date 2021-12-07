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
import OperadoresContext from '../../contexto/Operadores/OperadoresContext';
import Card from './Card';
import Tablenew from './Table';
import Tableprov from './TableCustomOperadores';

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

export default function CustomOperadores() {
  const classes = useStyles();
  const {
    dataListaOperadores,
    getListaOperadores,
    totalOperadores,
    totalComunasOperadores,
    totalProvinciaOperadores,
    totalTipoOperadores,
    dataListaOperadoresProvincia,
    Provincia,
  } = useContext(OperadoresContext);

  useEffect(() => {
    getListaOperadores();
  }, []);

  useEffect(() => {
    console.log(dataListaOperadoresProvincia);
  }, [dataListaOperadoresProvincia]);

  const Contenido = (
    (dataListaOperadores.length > 0)
      ? (
        <div className={classes.div}>

          <div>
            <Grid container className={classes.cards} spacing={2}>
              <Grid item md={3} xs={12}>
                <Card
                  title="Total Operadores"
                  value={totalOperadores}
                  color="success.main"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Card
                  title="Total Comunas"
                  value={totalComunasOperadores}
                  color="warning.main"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Card
                  title="Total Provincias"
                  value={totalProvinciaOperadores}
                  color="primary.main"
                />
              </Grid>
              <Grid item md={3} xs={12}>
                <Card
                  title="Categorias Operadores"
                  value={totalTipoOperadores}
                  color="primary.main"
                />
              </Grid>
            </Grid>
          </div>

          <div className={classes.titulo}>
            <Typography color="primary" variant="h5">
              LISTADO OPERADORES
            </Typography>
          </div>
          <div className={classes.div}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6} xs={12}>
                <Tablenew
                  rows={dataListaOperadores}
                  cols={['Operador', 'Categoria', 'Comuna', 'Provincia', 'Lista Provincia']}
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <Tableprov
                  dataListaOperadoresProvincia={dataListaOperadoresProvincia}
                  Provincia={Provincia}
                />
              </Grid>
            </Grid>
          </div>
        </div>
      )
      : <>Loading</>

  );

  return (<>{ Contenido }</>
  );
}
