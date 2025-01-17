/* eslint-disable react/style-prop-object */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@mui/icons-material/Home';
import AttractionsIcon from '@mui/icons-material/Attractions';
import StreetviewIcon from '@mui/icons-material/Streetview';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import MuseumIcon from '@mui/icons-material/Museum';
import gplay from 'google-play-scraper';
import Atracciones from './Atracciones/Atracciones';
import Museos from './Museos/Museos';
import Operadores from './Operadores/Operadores';
import Rutas from './Rutas/Rutas';
import Maule from './Maule/Maule';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

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

  colorIcon: {
    color: theme.palette.secondary.main,
  },

}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    gplay.list({
      category: gplay.category.GAME_ACTION,
      collection: gplay.collection.TOP_FREE,
      num: 2,
    }).then(console.log, console.log);
  }, []);

  const tabNames = {
    0: 'Maule360',
    1: 'Atracciones Turísticas',
    2: 'Rutas Turísticas',
    3: 'Operadores Turísticos',
    4: 'Museos',
  };

  return (

    <div className={classes.root} style={{ overflow: 'auto' }}>
      <AppBar style={{ borderRadius: 10 }} position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="secondary"
          textColor="inherit"
          aria-label="scrollable force tabs example"
        >
          <Tab
            label={tabNames[0]}
            icon={<HomeIcon className={value === 0 ? classes.colorIcon : null} />}
            {...a11yProps(0)}
          />
          <Tab
            label={tabNames[1]}
            icon={<AttractionsIcon className={value === 0 ? classes.colorIcon : null} />}
            {...a11yProps(0)}
          />
          <Tab
            label={tabNames[2]}
            icon={<AddRoadIcon className={value === 0 ? classes.colorIcon : null} />}
            {...a11yProps(0)}
          />
          <Tab
            label={tabNames[3]}
            icon={<StreetviewIcon className={value === 0 ? classes.colorIcon : null} />}
            {...a11yProps(0)}
          />
          <Tab
            label={tabNames[4]}
            icon={<MuseumIcon className={value === 0 ? classes.colorIcon : null} />}
            {...a11yProps(0)}
          />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index={0}>
        <Maule />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Atracciones />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Rutas />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Operadores />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Museos />
      </TabPanel>

    </div>

  );
}
