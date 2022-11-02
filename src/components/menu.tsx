import * as React from 'react';

import
{
  IComponent,
  IComponentOptions
}
from './interface';

export interface IMenuOptions extends IComponentOptions
{
}

export class Menu extends React.Component
{
  constructor(props:IMenuOptions)
  {
    super(props);

    this.state =
    {
      visible: false,
    };
  }

  render()
  {
    return (
      <div id='menu'></div>
    );
  }
}

