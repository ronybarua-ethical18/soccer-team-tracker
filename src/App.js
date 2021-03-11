import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import ErrorPage from './components/ErrorPage/ErrorPage';
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
          <Route path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
