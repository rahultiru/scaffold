import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import { Home } from './loadableComponents';

const Routes: React.SFC = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={() => <div />} />
        <Route exact={true} path="/portfolio" component={() => <div className="portfolio" />} />
      </Switch>
    </Router>
  );
};

export default Routes;
