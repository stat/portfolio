import React from 'react';

// import { Container } from './components/container';
import { Background } from './components/background';
import { Menu } from './components/menu';

import { Router } from './router';

export interface ILayoutOptions
{
  'background-class-name':string;
  'background-description':string;
  'background-owner':string;
}

export function Layout(props:ILayoutOptions)
{
  const
  {
    'background-class-name': background_class_name,
    'background-description': background_description,
    'background-owner': background_owner,
  } = props;

  return (
    <>
      <Background
        className={background_class_name}
        description={background_description}
        owner={background_owner} />

      <Menu />

      <div
        className='fullscreen'>

        <Router />
      </div>
    </>
  );
}
