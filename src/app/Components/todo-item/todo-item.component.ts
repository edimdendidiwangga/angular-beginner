import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodoService } from '../../Services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // Toogle in UI
    todo.completed = !todo.completed;
    // Toogle in Server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo)
    })
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }
}
