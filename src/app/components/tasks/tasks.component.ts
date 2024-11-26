import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../Tarefa';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] = []
  mostrarTarefaAddTask: boolean = false
  textoBtn : string = "Mostrar"

  alterarMostrarTarefaAddTask(){
    this.mostrarTarefaAddTask = !this.mostrarTarefaAddTask
    if(this.mostrarTarefaAddTask) this.textoBtn = "Esconder"
    else this.textoBtn = "Mostrar"
  }

  constructor(private taskService: TaskService) {}

  // quando ele carregar a página vai chamar esse método como se fosse o useEffect(() => {}, []) do react
  // para usar ele tem que dar um implements OnInit
  ngOnInit() : void{
    this.taskService.getTasks().subscribe((dado) => { // para chamar o método tem que dar antes um subscrible
      this.tarefas = dado
      console.log(dado)
    })  
  }

  AddTask(tarefa: Tarefa) : void{
    this.taskService.addTask(tarefa).subscribe((dado) =>{
      this.tarefas.push(dado)
    })
  }

  deleteTask(tarefa: Tarefa){
    // método subscrible sobrescreve a informação
    this.taskService.deleteTask(tarefa).subscribe( (dado) => { // para chamar o método tem que dar antes um subscrible
      this.tarefas = this.tarefas.filter( (t) => t.id !== tarefa.id )
      
    } )
    console.log("tarefa deletada")
  }

  toggleConcluiido(tarefa: Tarefa){
    tarefa.concluido = !tarefa.concluido
    this.taskService.updateTask(tarefa).subscribe()
  }
}
