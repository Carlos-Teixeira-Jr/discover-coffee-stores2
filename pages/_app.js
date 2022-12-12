import '../styles/globals.css';
import StoreProvider from '../store/store-context';

//Aqui ficam todos componentes que ficarão presentes em todas as rotas da aplicação;
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>

  );
}


export default MyApp;
