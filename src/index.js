import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './containers/App/App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.Fragment>
);

