import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // nạp trước để CSS component ghi đè được style chung
import App from './App.jsx';
import { UIProvider } from './context/UIContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
  </StrictMode>,
);
