import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/themeConfig';
import ContenidoMain from './components/ContenidoMain';
import Atracciones from './contexto/Atracciones/AtraccionesState';
import Rutas from './contexto/Rutas/RutasState';
import Museos from './contexto/Museos/MuseosState';
import Operadores from './contexto/Operadores/OperadoresState';

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
            <Rutas>
              <Museos>
                <Operadores>
                  <ContenidoMain />
                </Operadores>
              </Museos>
            </Rutas>
          </Atracciones>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
