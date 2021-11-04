import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskList from './pages/TaskList';
import EditTask from './pages/EditTask';

import AddTask from './pages/AddTask';

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <BrowserRouter data-testid="browser-router">
      <Switch data-testid="switch">
        <Route data-testid="route-all" exact path="/all" component={TaskList} />
        <Route data-testid="route-add" exact path="/add" component={AddTask} />
        <Route data-testid="route-edit" exact path="/edit/:id" component={EditTask} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
