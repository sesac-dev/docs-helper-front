import React from 'react';
import ReactDOM from 'react-dom/client';
import 'regenerator-runtime/runtime.js';
import App from './App.tsx';
import './index.css';
import TanStackQueryContext from './libs/contexts/TanStackQueryContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackQueryContext>
      <App />
    </TanStackQueryContext>
  </React.StrictMode>,
);
