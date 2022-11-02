import * as React from 'react';
import * as ReactDOM from 'react-dom'; 

import
{
  IComponent,
  IComponentChildren,
  IComponentOptions,
}
from './interface';

export interface IPortfolioOptions extends IComponentOptions
{
}

export class Portfolio extends React.Component
{
  render()
  {
    return (
      <h1>
        PORTFOLIO
      </h1>
    );
  }
}
