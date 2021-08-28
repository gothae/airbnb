import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constant/route';
import Signup from "./services/Signup";

const main = lazy(() => import('./pages/main'));
const experiencesOnline = lazy(() => import('./pages/experiences_online'));
const maps = lazy(() => import('./pages/maps'))
const loggedin = lazy(() => import('./pages/loggedin'));
const notfound = lazy(() => import('./pages/NotFound'));
//서버 json - server--watch./ src / db / data.json--port 3001
export  default function App(){
  return (
    <Router>
      <Suspense fallback={<p>Loading..</p>}>
        <Switch>
          <Route exact path={ROUTES.MAIN} component={main} />
          <Route path={ROUTES.EXPERIENCESONLINE} component={experiencesOnline} />
          <Route path={ROUTES.MAPS} component={maps}/>
          <Route exact path={ROUTES.LOGGEDIN} component={loggedin}/>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route component={notfound}/>
        </Switch>
      </Suspense>
    </Router>
  );
}