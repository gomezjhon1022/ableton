import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './routes/App';
import './styles/main.scss'
import { AbletonProvider } from './components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AbletonProvider>
      <App />
    </AbletonProvider>
  </React.StrictMode>
);
