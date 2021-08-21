import {Switch, Route} from 'react-router-dom'
import Home from './componenets/Home'
import MovieDetail from './componenets/MovieDetail'

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/movie/:id" component={MovieDetail}/>
    </Switch>
  );
}

export default App;
