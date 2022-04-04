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
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain'
      }
    }

    return this.http.post<any>(`https://staging.alfredouribe.com/api/process_command/`, JSON.stringify(postData), options)
    //return this.http.post<any>(`http://192.168.100.33:8000/api/process_command/`, JSON.stringify(postData), options)
  }
}
