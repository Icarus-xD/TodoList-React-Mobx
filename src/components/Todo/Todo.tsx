import { observer } from 'mobx-react-lite';
import Todos from '../../store/Todos';
import { ITodo } from '../../common';
import './Todo.scss';
import { DragEvent } from 'react';

const Todo = observer(({id, text, completed}: ITodo): JSX.Element => {

  const openEditModal = () => {
    console.log('modal opened');
  };

  const dragStartHandler = (event: DragEvent<HTMLLIElement>, id: string) => {
    Todos.setDraggedTodo(id);
  };

  const dragEndHandler = (event: DragEvent<HTMLLIElement>) => {
    event.currentTarget.style.backgroundColor = '#eee'; 
  };

  const dragOverHandler = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    event.currentTarget.style.backgroundColor = '#ddd'; 
  };

  const dropHandler = (event: DragEvent<HTMLLIElement>, id: string) => {
    event.preventDefault();
    Todos.swapTodos(id);
    event.currentTarget.style.backgroundColor = '#eee'; 
  };

  return (
    <li 
      className='todo' 
      draggable={true}
      onDragStart={(event: DragEvent<HTMLLIElement>) => dragStartHandler(event, id)}
      onDragLeave={(event: DragEvent<HTMLLIElement>) => dragEndHandler(event)}
      onDragEnd={(event: DragEvent<HTMLLIElement>) => dragEndHandler(event)}
      onDragOver={(event: DragEvent<HTMLLIElement>) => dragOverHandler(event)}
      onDrop={(event: DragEvent<HTMLLIElement>) => dropHandler(event, id)}
      onDoubleClick={openEditModal}
    >
      <input id={id} type='checkbox' checked={completed} onChange={() => {Todos.toggleTodoCompleted(id)}} />
      <label htmlFor={id} onDoubleClick={openEditModal}>
        {text}
      </label>
      <button onClick={() => Todos.deleteTodo(id)}>x</button>
    </li>
  );
});

export default Todo;