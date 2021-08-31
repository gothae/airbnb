import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from './constant/route';
import Signup from "./services/Signup";
import useUser from "./services/use-user";
import UserContext from "./services/user";

const main = lazy(() => import('./pages/main'));
const experiencesOnline = lazy(() => import('./pages/experiences_online'));
const maps = lazy(() => import('./pages/maps'))
const loggedin = lazy(() => import('./pages/loggedin'));
const notfound = lazy(() => import('./pages/NotFound'));
const message = lazy(() => import('./pages/message'));
const notifications = lazy(() => import('./pages/notifications'));
const trips = lazy(() => import('./pages/trips'));
const wishlist = lazy(() => import('./pages/wishlist'));

//서버 json - server--watch./ src / db / data.json--port 3001
export  default function App(){
  const { user } = useUser();
  return (
    <UserContext.Provider value = { {user } }>
      <Router>
        <Suspense fallback={<p>Loading..</p>}>
          <Switch>
            <Route exact path={ROUTES.MAIN} component={main} />
            <Route path={ROUTES.EXPERIENCESONLINE} component={experiencesOnline} />
            <Route path={ROUTES.MAPS} component={maps}/>
            <Route path={ROUTES.LOGGEDIN} component={loggedin}/>
            <Route path='/signup'>
              <Signup/>
            </Route>
            <Route path={ROUTES.MESSAGE} component={message} />
            <Route path={ROUTES.NOTIFICATIONS} component={notifications} />
            <Route path={ROUTES.TRIPS} component={trips} />
            <Route path={ROUTES.WISHLIST} component={wishlist} />
            
            <Route component={notfound}/>

          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}