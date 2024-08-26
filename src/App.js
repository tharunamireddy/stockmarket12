import {BrowserRouter,Switch, Route, Redirect} from 'react-router-dom'

import './App.css'
import Login from './components/Login'
import Trade from './components/Trade'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Home from './components/Home'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trade" component={Trade} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App