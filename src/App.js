import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constant/route';
import Maps from "./pages/maps";

const main = lazy(() => import('./pages/main'));
const experiencesOnline = lazy(() => import('./pages/experiences_online'));
const maps = lazy(() => import('./pages/maps'))
export  default function App(){
  return (
    <Router>
      <Suspense fallback={<p>Loading..</p>}>
        <Switch>
          <Route exact path={ROUTES.MAIN} component={main} />
          <Route path={ROUTES.EXPERIENCESONLINE} component={experiencesOnline} />
          <Route path={ROUTES.MAPS} component={maps}/>
        </Switch>
      </Suspense>
    </Router>
  );
}