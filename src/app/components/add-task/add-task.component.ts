import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-add-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output () onAddTask = new EventEmitter <Tarefa> ()

   tarefa: string = ""
   categoria: string = ""
   concluido: boolean = false


  onSubmit(){
    if(this.tarefa === "" || this.categoria === ""  ) {
      alert("Complete os campos tarefa e categoria")
    } 
    //console.log(this.tarefa, this.categoria)
    const novaTarefa = {
      task: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa)

    this.tarefa = ""
    this.categoria = ""
  }

  
}
