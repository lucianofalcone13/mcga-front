import { Provider } from 'react-redux';
import './App.css';
import TaskList from './components/routes/taskList';
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
