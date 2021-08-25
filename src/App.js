import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constant/route';

const main = lazy(() => import('./pages/main'));

export  default function App(){
  return (
    <Router>
      <Suspense fallback={<p>Loading..</p>}>
        <Switch>
          <Route path = {ROUTES.MAIN} component = {main} />
        </Switch>
      </Suspense>
    </Router>
  );
}