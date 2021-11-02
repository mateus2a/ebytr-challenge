import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TaskList from './pages/TaskList';

import AddTask from './pages/AddTask';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/all" component={TaskList} />
        <Route exact path="/add" component={AddTask} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
