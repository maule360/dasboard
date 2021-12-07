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
import { Typography } from '@material-ui/core';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import OperadoresContext from '../../contexto/Operadores/OperadoresContext';

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
    height: 50,
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

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  const {
    dataListaOperadoresProvincia,
    Provincia,
  } = props;
  const Contenido = (
    (dataListaOperadoresProvincia.length > 0)
      ? (
        <div className={classes.div}>
          <div className={classes.titulo}>
            <Typography color="primary" variant="h5">
              LISTADO OPERADORES PROVINCIA
              {' '}
              {Provincia}
            </Typography>
          </div>
          <div className={classes.div}>
            <TableContainer component={Paper}>
              <Table size="small" aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Actividad</StyledTableCell>
                    <StyledTableCell align="right">Detalle</StyledTableCell>
                    <StyledTableCell align="right">Contacto</StyledTableCell>
                    <StyledTableCell align="right">Correo</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataListaOperadoresProvincia.map((js) => (
                    <StyledTableRow key={js.id}>
                      <StyledTableCell component="th" scope="row">
                        {js.nombre}
                      </StyledTableCell>
                      <StyledTableCell align="right">{js.comuna}</StyledTableCell>
                      <StyledTableCell align="right">{js.contacto}</StyledTableCell>
                      <StyledTableCell align="right">{js.correo}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )
      : <></>

  );

  return (<>{ Contenido }</>
  );
}
