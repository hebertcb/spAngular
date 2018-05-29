import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usuarios : string[] = [];

  constructor(private httpService : HttpService) { }

  newUser(nombre : string, apellido: string){
    this.usuarios.push(nombre+" "+apellido)
    this.httpService.sendDatos({nombre: nombre, apellido: apellido})
      .subscribe(
        (data: Response) => console.log(data)
      )
  }

  getUsers():string[]{             
    let aux: any[] = [];
    this.httpService.getDatos()
      .subscribe(
        (data: Response) => {  
          for(let key in data)
            aux.push(data[key].nombre+" "+data[key].apellido);                 
        }
      )  
      this.usuarios = aux;
      return this.usuarios;
  }
}
