import React from 'react';

import './index.css';
import App from "./App";
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
render(

  <BrowserRouter>
    <App/>
  </BrowserRouter>
  )