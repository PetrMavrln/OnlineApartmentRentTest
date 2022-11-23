import { Spinner } from 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, setupStore } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={setupStore()}>
    <PersistGate loading={<Spinner animation="border" role="status" />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
