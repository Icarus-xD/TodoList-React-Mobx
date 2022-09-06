import Todo from '../Todo/Todo';
import { observer } from 'mobx-react-lite';
import Todos from '../../store/Todos';
import './TodoList.scss';

const TodoList = observer((): JSX.Element => {

  return (
    <ul className='todo-list'>
      {
        Todos.filteredTodos.map(todo => {
          return (
            <Todo key={todo.id} {...todo} />
          );
        })
      }
    </ul>
  );
});

export default TodoList