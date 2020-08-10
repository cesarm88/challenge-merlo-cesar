import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ConfirmPage from '../pages/ConfirmPage';
import ReviewPage from '../pages/ReviewPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/review">
        <ReviewPage />
      </Route>
      <Route exact path="/confirmation">
        <ConfirmPage />
      </Route>
      <Route path="/*">
        <Redirect to="/review" />
      </Route>
    </Switch>
  );
};

export default Routes;
