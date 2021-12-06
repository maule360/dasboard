import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/themeConfig';
import ContenidoMain from './components/ContenidoMain';
import Atracciones from './contexto/Atracciones/AtraccionesState';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header />
        <div style={{
          padding: 10,
          backgroundColor: 'white',
          minHeight: '1000px',
        }}
        >
          <Atracciones>
            <ContenidoMain />
          </Atracciones>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
