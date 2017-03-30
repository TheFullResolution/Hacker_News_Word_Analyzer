import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import 'scss/global.scss';

import Header from 'Common/Header';
import Page1Content from 'Page1/Page1Content';
import Page2Container from 'Page2/Page2Container';

export const Root = () => (
  <HashRouter>
    <div>
      <Header />

        <Route exact path="/" component={Page1Content} />
        <Route path="/analyzer" component={Page2Container} />

    </div>

  </HashRouter>
);

if (!module.hot) render(<Root />, document.querySelector('react'));
