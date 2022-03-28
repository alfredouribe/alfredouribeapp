import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementoMenu } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenuElements(){
    return this.http.get<ElementoMenu[]>('assets/data/menu_options.json');
  }

  processCommand(command: string){
    const postData = {
      command: command
    }

    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }

    return this.http.post<any>(`http://localhost:8000/api/process_command/`, JSON.stringify(postData), options)
  }
}
