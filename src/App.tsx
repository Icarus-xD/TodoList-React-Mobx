import TodoList from './components/TodoList/TodoList';
import TodoListControl from './components/TodoListControl/TodoListControl';

import { observer } from 'mobx-react-lite';
import ModalEdit from './components/ModalEdit/ModalEdit';

const App = observer((): JSX.Element => {

  return (
    <>
      <TodoListControl />
      <TodoList />
      <ModalEdit />
    </>
  );
});

export default App;
