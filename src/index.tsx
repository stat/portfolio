import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import classnames from 'classnames';

import
{
  IComponent,
  IComponentOptions,
}
from './components/interface';

import
{
  IBackgroundOptions,
  Background,
}
from './components/background';

import { Container } from './components/container';
import { Me } from './components/me';
import { Menu } from './components/menu';

interface IIndexOptions extends IBackgroundOptions
{
  'background-class-name':string;
  'background-description':string;
  'background-owner':string;
}

class Index extends React.Component
{
  background_class_name:string;
  background_description:string;
  background_owner:string;

  static DEFAULT_BACKGROUND_CLASS_NAME =
    'index-background background-cover fullscreen';

  static DEFAULT_BACKGROUND_DESCRIPTION =
    `Summiting Mt. Rainier for the\nsecond time in August 2012`;

  static DEFAULT_BACKGROUND_OWNER =
    'Chris Gerber';

  constructor(props:IIndexOptions)
  {
    super(props);

    this.background_class_name =
      props['background-class-name'] || Index.DEFAULT_BACKGROUND_CLASS_NAME;

    this.background_description =
      props['background-description'] || Index.DEFAULT_BACKGROUND_DESCRIPTION;

    this.background_owner =
      props['background-owner'] || Index.DEFAULT_BACKGROUND_OWNER;
  }

  render()
  {
    const
    {
      background_class_name,
      background_description,
      background_owner,
    } = this;

    return (
      <>
        <Background
          className={background_class_name}
          description={background_description}
          owner={background_owner} />

        <Menu />

        <Container
          className='fullscreen'>

          <Me />
        </Container>
      </>
    );
  }
}

const root =
  ReactDOM.createRoot(document.getElementById('root')!);

root.render(<Index />);
