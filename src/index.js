import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <Suspense fallback={(<h5>Loading...</h5>)}>
  <React.StrictMode>
    <App />
  </React.StrictMode>    
  </Suspense>
,
  document.getElementById('root')
);
