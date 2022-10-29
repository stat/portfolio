import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import classnames from 'classnames'

function Container(props)
{
  console.log(props);
  return (
    <div className={classnames('container', props.className)}>
      {props.children}
    </div>
  );
}

class IndexCard extends React.Component
{
  render()
  {
    return (
      <Container className='card'>
        <h1>Experienced<br/>Software Engineer</h1>

        <div className="gfx gfx-mountain"></div>

        <Container className="card-section">
          <a
            className="animation animation-underline"
            href="assets/pdf/chris-gerber-cv.pdf"
            target="_blank">

            CV
          </a>
        </Container>

        <Container className="card-section">
          <a
            class="animation animation-underline"
            href="https://kinesis.io"
            rel="noopener noreferrer"
            target="_blank">

            Kinesis
          </a>
        </Container>

        <Container className="card-section-footer">
          <a
            className="animation animation-underline"
            href="https://github.com/stat/samples"
            rel="noopener noreferrer"
            target="_blank">

            GitHub
          </a>

          <a
            className="animation animation-underline"
            href="https://www.linkedin.com/in/csgerber"
            rel="noopener noreferrer"
            target="_blank">

            LinkedIn
          </a>
        </Container>
      </Container>
    );
  }
}

class Index extends React.Component
{
  render()
  {
    return (
      <>
        <Container className='fullscreen'>
          <IndexCard/>
        </Container>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Index />);
