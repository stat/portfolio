import * as React from 'react';
import classnames from 'classnames';

import
{
  IComponent,
  IComponentOptions
}
from './interface';

import Key from '../utils/key';

export interface IContainerOptions extends IComponentOptions
{
}

export function Container(props:IContainerOptions)
// export function Container(props:any)
{
  return (
    <div
      key={Key.gen()}
      className={classnames('container', props.className)}>

      {props.children}
    </div>
  );
}
