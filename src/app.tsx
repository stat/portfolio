import React from 'react';
import ReactDOM from 'react-dom/client';

import './app.css';

import
{
  ILayoutOptions,
  Layout,
} from './layout';

import ObjectExtensions from './extensions/object';

interface IAppOptions extends ILayoutOptions { }

export class App extends React.Component
{
  static default_options:IAppOptions =
  {
    'background-class-name':
      'index-background background-cover fullscreen',
    'background-description':
      'Summiting Mt. Rainier for the\nsecond time in August 2012',
    'background-owner':
      'Chris Gerber',
  }

  options:IAppOptions;

  constructor(props:IAppOptions)
  {
    super(props);

    this.options = ObjectExtensions.union<IAppOptions>(
      App.default_options,
      props,
    );
  }

  render()
  {
    return <Layout {...this.options} />;
  }
}
