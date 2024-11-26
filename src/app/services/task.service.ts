import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  { Tarefa } from '../../Tarefa';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:3000/tasks"

  constructor(private http : HttpClient) { }

  getTasks() : Observable<Tarefa[]>{ // foi criado o tipo tarefa e ela retorna uma lsita de tarefas, 
    //Observable usado pois o método é assincrono
    return this.http.get<Tarefa[]>(this.apiUrl)
  }

  deleteTask(tarefa: Tarefa): Observable<Tarefa>{
    return this.http.delete<Tarefa>(`${this.apiUrl}/${tarefa.id}`)
  }
  
  updateTask(tarefa: Tarefa) : Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa)
  }

  addTask(tarefa: Tarefa){
    return this.http.post<Tarefa>(`${this.apiUrl}`, tarefa)
  }
}
