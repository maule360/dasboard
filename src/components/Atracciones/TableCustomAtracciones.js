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
import Button from '@material-ui/core/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Table2 from './TableCustomActividades';
import AtraccionesContext from '../../contexto/Atracciones/AtraccionesContext';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
    getListaAtracciones,
    dataListaAtracciones,
    getListaActividades,
  } = useContext(AtraccionesContext);
  useEffect(() => {
    getListaAtracciones();
  }, []);

  function handleClick(event) {
    const { id } = event.currentTarget;
    getListaActividades(id);
  }
  const Contenido = (
    (dataListaAtracciones.length > 0)
      ? (
        <div className={classes.div}>
          <div className={classes.titulo}>
            <Typography color="primary" variant="h5">
              LISTADO ATRACCIONES
            </Typography>
          </div>
          <div className={classes.div}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6} xs={12}>
                <TableContainer component={Paper}>
                  <Table size="small" aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Atracción Turistica</StyledTableCell>
                        <StyledTableCell align="right">Descripcion</StyledTableCell>
                        <StyledTableCell align="right">Comuna</StyledTableCell>
                        <StyledTableCell align="right">Provincia</StyledTableCell>
                        <StyledTableCell align="right">Actividades</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dataListaAtracciones.map((js) => (
                        <StyledTableRow key={js.id}>
                          <StyledTableCell component="th" scope="row">
                            {js.nombre.replace('Atracción Turistica ', '').replace('Atracción Turística ', '')}
                          </StyledTableCell>
                          <StyledTableCell align="right">{js.descripcion}</StyledTableCell>
                          <StyledTableCell align="right">{js.comuna}</StyledTableCell>
                          <StyledTableCell align="right">{js.provincia}</StyledTableCell>
                          <StyledTableCell align="right">
                            <Button
                              className={classes.button}
                              variant="outlined"
                              id={js.id}
                              onClick={handleClick}
                            >
                              Mostrar
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item md={6} xs={12}>
                <Table2 />
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
