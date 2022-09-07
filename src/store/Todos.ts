import { makeAutoObservable } from 'mobx';
import { ITodo, sortValue } from '../common';
import Control from './Control';

class Todos {

  todos: ITodo[] = [
    {id: '1e2ee21ew', text: 'go to school', completed: true},
    {id: '32re3rfde', text: 'cook dinner', completed: false},
  ];

  filteredTodos: ITodo[] = this.todos;

  draggedTodo: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  toggleTodoCompleted(id: string) {
    this.todos.map(todo => todo.id === id ? todo.completed = !todo.completed : todo);
    this.setFilteredTodos(Control.sort);
  }

  addTodo(todo: ITodo) {
    this.todos = [...this.todos, todo];
    this.setFilteredTodos(Control.sort);
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.setFilteredTodos(Control.sort);
  }

  setFilteredTodos(sortValue: sortValue) {
    const sort = sortValue === 'all' ? false : true;
    this.filteredTodos = !sort ? this.todos : this.todos.filter(todo => sortValue === 'completed' ? todo.completed : !todo.completed);
  }

  setDraggedTodo(id: string) {
    this.draggedTodo = id;
  }

  swapTodos(id: string) {
    const index1 = this.todos.findIndex(todo => todo.id === this.draggedTodo);
    const index2 = this.todos.findIndex(todo => todo.id === id);

    this.todos[index1] = this.todos.splice(index2, 1, this.todos[index1])[0];
    this.setFilteredTodos(Control.sort);
  }
}

export default new Todos();