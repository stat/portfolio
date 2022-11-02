import React from 'react';

import { Route, Routes, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { About } from './components/about';
import { Portfolio } from './components/portfolio';

export function Router()
{
  let location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        classNames="animation-slide"
        timeout={1000}>

        <Routes location={location}>
          <Route path="/">
            <Route index element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>

      </CSSTransition>
    </TransitionGroup>
  );
}
