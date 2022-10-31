import * as React from 'react';
import classnames from 'classnames';

import
{
  IComponent,
  IComponentOptions
}
from './interface';

export interface IContainerOptions extends IComponentOptions
{
}

export function Container(props:IContainerOptions)
{
  return (
    <div className={classnames('container', props.className)}>
      {props.children}
    </div>
  );
}
