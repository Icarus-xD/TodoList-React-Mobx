import TodoList from './components/TodoList/TodoList';
import TodoListControl from './components/TodoListControl/TodoListControl';

import { observer } from 'mobx-react-lite';

const App = observer((): JSX.Element => {

  return (
    <>
      <TodoListControl />
      <TodoList />
    </>
  );
});

export default App;
