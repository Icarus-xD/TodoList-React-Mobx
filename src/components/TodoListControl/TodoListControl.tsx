import { observer } from 'mobx-react-lite';
import AddTodo from '../AddTodo/AddTodo';
import Control from '../../store/Control';
import Todos from '../../store/Todos';
import { sortValue } from '../../common';
import './TodoListControl.scss';
import { ChangeEvent } from 'react';

const TodoListControl = observer((): JSX.Element => {
  return (
    <div className='control'>
      <AddTodo />
      <div className='select-wrapper'>
        <select 
          className='select'
          value={Control.sort}
          onChange={(event: ChangeEvent<HTMLSelectElement>) => {
            const sort = event.currentTarget.value as sortValue
            Control.setSort(sort);
            Todos.setFilteredTodos(sort)
          }}
        >
          <option 
            value='all' 
          >All</option>
          <option 
            value='completed' 
          >Completed</option>
          <option 
            value='uncompleted' 
            >Uncompleted</option>
        </select>
      </div>
    </div>
  );
});

export default TodoListControl;