import * as React from 'react';
import classnames from 'classnames';

import
{
  IComponent,
  IComponentOptions
}
from './interface';

import Attribution from './attribution';

export interface IBackgroundOptions extends IComponentOptions
{
  description?:string;
  owner?:string;
}

export function Background(props:IBackgroundOptions)
{
  return (
    <div className={classnames('background', props.className)}>
      <div className='background-image'/>
      <div className='background-filter'/>

      {
        (
          props.description ||
          props.owner
        )

        &&

        <Attribution
          description={props.description}
          owner={props.owner} />
      }

      {props.children}
    </div>
  );
}
