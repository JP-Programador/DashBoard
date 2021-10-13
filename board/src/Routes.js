import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './pages/home'
import Register from './pages/registrations'
import Schedule from './pages/schedules'
 export default function Routes () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path = '/' exact = {true} component = {Home} />
              <Route path = '/register' component = {Register} />
              <Route path = '/schedule' component = {Schedule} />

          </Switch>
        </BrowserRouter>
    )
    
}


