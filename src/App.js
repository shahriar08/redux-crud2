import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import EditUser from './components/EditUser';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/edit-user/:id' component={EditUser} />
          <Route path='/registration' component={Registration} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
