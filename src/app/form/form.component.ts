import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input() todo = '';
  @Input() addButtonShow=false;
  @Input() updateButtonShow=false;

  @Output() givemeTodos = new EventEmitter();
  @Output() givemeTodoForUpdate = new EventEmitter();



  todoAdd(value: any) {
    if (value.length >= 4) {
      let randomId = Math.random() * 100;
      let todoItem = {
        id: randomId,
        Title: value,
        Completed: false,
      };
      this.givemeTodos.emit(todoItem);
      this.todo="";
    }
  }

  updateValueTodo(value: any) {
    this.givemeTodoForUpdate.emit(value);
    this.todo="";
  }
  constructor() {}

  ngOnInit(): void {}
}
