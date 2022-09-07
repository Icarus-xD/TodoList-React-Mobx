import { makeAutoObservable } from 'mobx';
import { sortValue } from '../common';

class Control {

  input: string = '';
  sort: sortValue = 'all';

  editMode: boolean = false;
  editingTodo: string = '';
  editInput: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setInput(text: string) {
    this.input = text;
  }

  clearInput() {
    this.input = '';
  }

  setSort(option: sortValue) {
    this.sort = option;
  }

  setEditMode(id?: string) {
    this.editMode = !this.editMode;
    if (typeof id === 'string') {
      this.editingTodo = id;
    } 
  }

  setEditInput(text: string) {
    this.editInput = text;
  }

  clearEdit() {
    this.editInput = '';
    this.editingTodo = '';
    this.setEditMode();
  }
}

export default new Control();