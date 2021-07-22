import { Provider } from "react-redux";
import "./App.css";
import TaskList from "./components/routes/taskList";
import { store } from "./redux/store";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./components/routes/login";
import './assets/fonts/Roboto-Regular.ttf'
import './assets/fonts/Roboto-Bold.ttf'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/tasks">
            <TaskList />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
