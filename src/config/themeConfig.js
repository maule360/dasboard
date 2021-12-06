import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({

  typography: {
    fontSize: 12,
    fontFamily: [
      'Ubuntu', 'sans-serif',
    ].join(','),
  },

  palette: {
    primary: {
      main: '#6A6A6A',
      light: '#EAE8E8',
    },
    secondary: {
      main: '#65C44A',
    },
    text: {
    },
    background: {
      paper: '#fff',
      default: '#e0e0e0',
    },
  },
  shape: {
    borderRadius: 14,
  },
});
export default theme;
