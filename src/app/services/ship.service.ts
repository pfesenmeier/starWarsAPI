import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Api_Url = "https://pokeapi.co/api/v2";

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  constructor(private http: HttpClient) { }
  
  getShips() {
    return this.http.get(`${Api_Url}/pokemon?offset=0&limit=152`);
  }

  getShip(query){
    return this.http.get(`${Api_Url}/pokemon/${query}`);
  }

  


}
