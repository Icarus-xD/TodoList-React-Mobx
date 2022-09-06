import { makeAutoObservable } from 'mobx';
import { sortValue } from '../common';

class Control {

  input: string = '';
  sort: sortValue = 'all';

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
}

export default new Control();