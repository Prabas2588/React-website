import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { GlobalProvider } from './context/GlobalProvider';
import AppRoutes from './Routes/routes';
 
 
export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AppRoutes />
      </GlobalProvider>
    </BrowserRouter>
  );
}
