import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import { App } from './app';
import { client } from './ApiService';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
