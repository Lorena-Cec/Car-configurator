import '../styles/globals.css'; 
import '@fontsource/inter';
import type { AppProps } from 'next/app'; 
import { Provider } from 'react-redux';  // Import Provider
import store from '../modules/authentication/state/store';  // Import tvoj Redux store

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>  {/* Omotaj s Provider */}
      <Component {...pageProps} />
    </Provider>
  ); 
}

export default MyApp; 
