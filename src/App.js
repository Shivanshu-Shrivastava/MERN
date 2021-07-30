import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Exercise from './component/Exercise'
import Navbar from './component/Navbar'
import Create from './component/Create'
import Update from './component/Update'
import CreateUser from './component/CreateUser'


function App() {
  return (
    <Router>
      <Switch>
        {/* <Navbar /> */}
          <Route exact path='/'>
            <Exercise />
          </Route>
          <Route exact path='/create'>
            <Create />
          </Route>
          <Route exact path='/update/:id'>
            <Update />
          </Route>
          <Route exact path='/user'>
            <CreateUser />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
