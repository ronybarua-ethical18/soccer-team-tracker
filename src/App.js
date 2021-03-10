import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <Banner></Banner>
            <Home></Home>
          </Route>
          <Route path="/team/:TeamId">
            <Team></Team>
          </Route>
          <Route path="/dashboard">
         
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
