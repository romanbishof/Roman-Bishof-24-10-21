// import './App.scss';
import {Switch, Route} from 'react-router-dom'
import Favorites from './pages/favorites/Favorites';
import Home from './pages/home/Home'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/favorietes" component={Favorites}></Route>
      </Switch>
    </div>
  );
}

export default App;
