import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskList from './pages/TaskList';
import EditTask from './pages/EditTask';

import AddTask from './pages/AddTask';

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/all" component={TaskList} />
        <Route exact path="/add" component={AddTask} />
        <Route exact path="/edit/:id" component={EditTask} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
