import { observer } from 'mobx-react-lite';
import { ChangeEvent, MouseEvent, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import Control from '../../store/Control';
import Todos from '../../store/Todos';
import './ModalEdit.scss';


const ModalEdit = observer((): ReactPortal | null => {

  if (!Control.editMode) return null;

  return createPortal(
    <div 
      className='overlay' 
      onClick={() => Control.clearEdit()}
    >
      <div 
        className='modal'
        onClick={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        <h3>Edit Todo</h3>
        <input 
          type='text' 
          value={Control.editInput} 
          onChange={(event: ChangeEvent<HTMLInputElement>) => Control.setEditInput(event.target.value)} 
        />
        <button 
          className='edit-todo-btn'
          disabled={!Control.editInput.length}
          onClick={() => {
            Todos.editTodo(Control.editingTodo, Control.editInput);
            Control.clearEdit();
          }}
        >Edit</button>
        <button 
          className='close-modal-btn'
          onClick={() => {
            Control.clearEdit();
          }}
        >x</button>
      </div>
    </div>,
  document.body);
});

export default ModalEdit;