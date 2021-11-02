import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskList from './pages/TaskList';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TaskList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
