import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo'
import { TodoService } from '../../Services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.todos = this.todos.filter(t => t.id !== todo.id);
    })
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo)
    })
  }
}
