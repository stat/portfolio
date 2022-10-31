import * as React from 'react';
import classnames from 'classnames';

import
{
  StringExtensions
}
from '../extensions/string';

import
{
  IComponent,
  IComponentOptions
}
from './interface';

export interface IAttributionOptions extends IComponentOptions
{
  description:string;
  owner:string;
}

export default function Attribution(props:IAttributionOptions)
{
  const description = new StringExtensions(props.description);
  const owner = new StringExtensions(props.owner);

  return (
    <div className={classnames('attribution container', props.className)}>
      <p>Picture by: {owner.toJSXString()}</p>
      <p>{description.toJSXString()}</p>
    </div>
  );
}
