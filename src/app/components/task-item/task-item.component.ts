import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input () tarefa !: Tarefa

  // Output manda os métodos para o pai: tasks 
  @Output () onDeleteTask = new EventEmitter<Tarefa>()
  @Output () onToggleConcluido = new EventEmitter<Tarefa>()
  
  faTimes = faTimes
  
  onDelete(tarefa: Tarefa){
    this.onDeleteTask.emit(tarefa)
  }

  onToggle(tarefa: Tarefa){
    this.onToggleConcluido.emit(tarefa)
  }
}
