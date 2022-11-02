import React from 'react';
import ReactDOM from 'react-dom/client';

import
{
  BrowserRouter
}
from "react-router-dom";

import { App } from './app';

export function boot(target='root')
{
  const element = document.getElementById(target);

  if(!element)
  {
    return;
  }

  element.setAttribute('class', 'animation-fade-in');

  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}

boot();
