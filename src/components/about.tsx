import * as React from 'react';
import * as ReactDOM from 'react-dom'; 

import
{
  Link,
}
from 'react-router-dom';

import classnames from 'classnames';

import
{
  IComponent,
  IComponentChildren,
  IComponentOptions,
}
from './interface';

import { Background } from './background';
import { Container } from './container';

import Key from '../utils/key';
import ObjectExtensions from '../extensions/object';

export interface IAboutOptions extends IComponentOptions
{
  // sections:Array<JSX.Element[]>
  sections:Array<IAboutSection>
}

// export type IAboutSection = Array<IAboutSectionItem>
export interface IAboutSection extends IComponentChildren
{
  name?:string
  items:Array<IAboutSectionItem>
}

export interface IAboutSectionItem extends IComponentChildren
{
  props:any
  tag:string

  icon?:string
  routed?:boolean
  name?:string
  text?:string
}

export class About extends React.Component
{
  sections:Array<IAboutSection> =
  [
    { 
      items:
      [
        {
          props:
          {
            href: 'assets/pdf/chris-gerber-cv.pdf',
            target: '_blank',
          },
          tag: 'a',
          text: 'CV',
        },
        {
          props:
          {
            href: 'https://kinesis.io',
            target: '_blank',
          },
          tag: 'a',
          text: 'Kinesis',
        },
        {
          props:
          {
            to: '/portfolio',
            target: '_self',
          },
          tag: 'Link',
          text: 'Portfolio',
        },
      ],
    },
    {
      name: 'social',    
      items:
      [
        {
          icon: 'bi bi-github',
          props:
          {
            href: 'https://github.com/stat/samples',
            target: '_blank',
          },
          tag: 'a',
        },
        {
          icon: 'bi bi-linkedin',
          props:
          {
            href: 'https://linkedin.com/in/csgerber',
            target: '_blank',
          },
          tag: 'a',
        },
      ],
    },
  ];

  constructor(props:IAboutOptions)
  {
    super(props);
  }

  link_click_handler(
    e:React.MouseEvent<HTMLElement, MouseEvent>
    // item:IAboutSectionItem
  )
  {
    e.currentTarget.blur()

    // if(!item.name)
    // {
    //   return;
    // }

    // e.preventDefault();

    // const event_name = `about-${item.name}-click`;
    // const event = new Event(event_name);

    // document.dispatchEvent(event);
  }

  render()
  {
    return (
      <Container className='me card centered'>
        <Background className="fullscreen" />

        <h1>Experienced<br/>Software Engineer</h1>
        <div className="gfx gfx-mountain"></div>

        {
          this.sections.map(this.render_section.bind(this))
        }
      </Container>
    );
  }

  render_section(section:IAboutSection)
  {
    const section_name = section.name ? `section-${section.name}` : '';

    return (
      <Container
        key={Key.gen()}
        className={classnames('card-section', section_name)}>
        {
          section.items.map(this.render_section_link.bind(this))
        }
      </Container>
    );
  }

  render_section_link(item:IAboutSectionItem)
  {
    const tag:string = item.tag;
    let factory:any;

    if(tag.charAt(0) == tag.charAt(0).toUpperCase())
    {
      switch(tag)
      {
        case 'Link': factory = Link; break;
      }
    }
    else
    {
      factory = tag;
    }

    const factory_props = ObjectExtensions.union(
      {
        className: 'animation animation-underline',
        key: Key.gen(),

        onClick: this.link_click_handler,
      },
      item.props
    );

    let element_children = [];

    if(item.icon)
    {
      element_children.push(<i key={Key.gen()} className={item.icon}></i>);
    }

    element_children.push(item.text);
    element_children.push(item.children);

    const element = React.createElement(
      factory,
      factory_props,
      [
        element_children,
      ]
    );

    return element;
  }

}
