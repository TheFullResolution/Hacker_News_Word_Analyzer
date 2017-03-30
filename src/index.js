import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import 'scss/global.scss';

import Header from 'Common/Header';
import Page1 from 'Page1/Page1';

export const Root = () => (
  <HashRouter>
    <div>
      <Header />
      <ReactCSSTransitionGroup
        component="div"
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
        className="content"
      >
        <Route path="/" component={Page1} />
      </ReactCSSTransitionGroup>
    </div>

  </HashRouter>
);

if (!module.hot) render(<Root />, document.querySelector('react'));
