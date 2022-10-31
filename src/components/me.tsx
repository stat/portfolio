import * as React from 'react';

import
{
  IComponent,
  IComponentChildren,
  IComponentOptions,
}
from './interface';

import
{
  Container
}
from './container';

import Key from '../utils/key';

export interface IMeOptions extends IComponentOptions
{
  // sections:Array<JSX.Element[]>
  sections:Array<IMeSection>
}

export type IMeSection = Array<IMeSectionItem>

export interface IMeSectionItem extends IComponentChildren
{
  name:string
  link:string
}

export class Me extends React.Component
{
  sections:Array<IMeSection>;

  static DEFAULT_SECTIONS =
  [
    [
      {
        name: 'CV',
        link: 'assets/pdf/chris-gerber-cv.pdf',
      },
    ],
    [
      {
        name: 'Kinesis',
        link: 'https://kinesis.io',
      },
    ],
    [
      {
        name: 'GitHub',
        link: 'https://github.com/stat/stamples',
      },
      {
        name: 'LinkedIn',
        link: 'https://linkedin.com/in/csgerber',
      },
    ],
  ];

  // sections:Array<JSX.Element[]>;

  // static DEFAULT_SECTIONS =
  // [
  //   [
  //     <a
  //       className="animation animation-underline"
  //       href="assets/pdf/chris-gerber-cv.pdf"
  //       target="_blank">

  //       CV
  //     </a>
  //   ],
  //   [
  //     <a
  //       className="animation animation-underline"
  //       href="https://kinesis.io"
  //       rel="noopener noreferrer"
  //       target="_blank">

  //       Kinesis
  //     </a>
  //   ],
  //   [
  //     <a
  //       className="animation animation-underline"
  //       href="https://github.com/stat/samples"
  //       rel="noopener noreferrer"
  //       target="_blank">

  //       GitHub
  //     </a>,
  //     <a
  //       className="animation animation-underline"
  //       href="https://www.linkedin.com/in/csgerber"
  //       rel="noopener noreferrer"
  //       target="_blank">

  //       LinkedIn
  //     </a>
  //   ],
  // ];

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

        {
          this.sections.map((section) =>
          {
            return (
              <Container className='card-section' key={Key.gen()}>
              {
                section.map(item =>
                {
                  return (
                    <a
                      className="animation animation-underline"
                      href={item.link}
                      key={Key.gen()}
                      target="_blank">

                      {item.name}
                    </a>
                  );
                })
              }
              </Container>
            );
          })
        }
      </Container>
    );
  }
}
