import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import classnames from 'classnames'

function tsx_str(str:string):(string | JSX.Element)[][]
{
  return str.split('\n').map((str) => [str, <br/>]);
}

interface IComponentOptions
{
  className?:string;
  children?:React.ReactNode | React.ReactNode[];
}

interface IAttributionOptions extends IComponentOptions
{
  description:string;
  owner:string;
}

function Attribution(props:IAttributionOptions)
{
  return (
    <div className={classnames('attribution container', props.className)}>
      <p>Picture by: {tsx_str(props.owner)}</p>
      <p>{tsx_str(props.description)}</p>
    </div>
  );
}

interface IBackgroundOptions extends IComponentOptions
{
  description:string;
  owner:string;
}

function Background(props:IBackgroundOptions)
{
  return (
    <div className={classnames('background', props.className)}>
      <div className='background-image'/>
      <div className='background-filter'/>

      <Attribution
        description={props.description}
        owner={props.owner} />

      {props.children}
    </div>
  );
}

interface IContainerOptions extends IComponentOptions {}

function Container(props:IContainerOptions)
{
  return (
    <div className={classnames('container', props.className)}>
      {props.children}
    </div>
  );
}

interface IMeOptions extends IComponentOptions
{
  sections:Array<JSX.Element[]>
}

class Me extends React.Component
{
  sections:Array<JSX.Element[]>;

  static DEFAULT_SECTIONS =
  [
    [
      <a
        className="animation animation-underline"
        href="assets/pdf/chris-gerber-cv.pdf"
        target="_blank">

        CV
      </a>
    ],
    [
      <a
        className="animation animation-underline"
        href="https://kinesis.io"
        rel="noopener noreferrer"
        target="_blank">

        Kinesis
      </a>
    ],
    [
      <a
        className="animation animation-underline"
        href="https://github.com/stat/samples"
        rel="noopener noreferrer"
        target="_blank">

        GitHub
      </a>,
      <a
        className="animation animation-underline"
        href="https://www.linkedin.com/in/csgerber"
        rel="noopener noreferrer"
        target="_blank">

        LinkedIn
      </a>
    ],
  ];

  constructor(props:IMeOptions)
  {
    super(props);

    this.sections =
      props.sections || Me.DEFAULT_SECTIONS;
  }

  render()
  {
    return (
      <Container className='card'>
        <h1>Experienced<br/>Software Engineer</h1>

        <div className="gfx gfx-mountain"></div>

        {this.sections.map((section, idx:number) =>
          {
            return (
              <Container className='card-section'>
              {
                section.map(item => item)
              }
              </Container>
            );
          })
        }
      </Container>
    );
  }
}

interface IMenuOptions extends IComponentOptions
{
}

class Menu extends React.Component
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
      <div></div>
    );
  }
}

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
