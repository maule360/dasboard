/* eslint-disable react/self-closing-comp */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table1 from './CustomRutas';

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

  return (

    <div className={classes.tab}>
      <Grid container className={classes.root} spacing={2}>
        <Grid item md={12} xs={12}>
          <Table1 />
        </Grid>
      </Grid>
    </div>

  );
}
