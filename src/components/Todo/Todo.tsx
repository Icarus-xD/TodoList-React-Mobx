import { observer } from 'mobx-react-lite';
import Todos from '../../store/Todos';
import { ITodo } from '../../common';
import './Todo.scss';

const Todo = observer(({id, text, completed}: ITodo): JSX.Element => {
  return (
    <li className='todo'>
      <input id={id} type='checkbox' checked={completed} onChange={() => {Todos.toggleTodoCompleted(id)}} />
      <label htmlFor={id}>
        {text}
      </label>
      <button onClick={() => Todos.deleteTodo(id)}>x</button>
    </li>
  );
});

 export default Todo;