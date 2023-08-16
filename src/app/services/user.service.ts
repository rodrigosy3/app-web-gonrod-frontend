import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public addUser(user: any) {
    return this.httpClient.post(`${baseURL}/rest/usuarios/crear-usuario`, user);
  }
}
