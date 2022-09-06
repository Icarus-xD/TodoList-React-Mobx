import { computed, makeAutoObservable, observable } from 'mobx';
import { ITodo, sortValue } from '../common';
import Control from './Control';

class Todos {

  todos: ITodo[] = [
    {id: '1e2ee21ew', text: 'go to school', completed: true},
    {id: '32re3rfde', text: 'cook dinner', completed: false},
  ];

  filteredTodos: ITodo[] = this.todos;

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
}

export default new Todos();