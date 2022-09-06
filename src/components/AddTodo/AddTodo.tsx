import { observer } from 'mobx-react-lite';
import { ChangeEvent } from 'react';
import Control from '../../store/Control';
import Todos from '../../store/Todos';
import './AddTodo.scss';

const AddTodo = observer((): JSX.Element => {

  return (
    <div className='add-todo'>
      <input value={Control.input} type='text' onChange={(event: ChangeEvent<HTMLInputElement>) => Control.setInput(event.target.value)} />
      <button 
        className='add-todo-btn'
        disabled={!Control.input.length}
        onClick={() => {
          Todos.addTodo({
            id: Math.round(Math.random() * 10 ** 9).toString(),
            text: Control.input,
            completed: false,
          });
          Control.clearInput();
        }
      }

      >Add Todo</button>
    </div>
  );
});

export default AddTodo;