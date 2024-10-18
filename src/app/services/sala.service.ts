import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Aula} from '../models/./aula';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  url: string = "";

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Aula[]> {
    return this.http.get<Aula[]>(this.url);
  }

  save(sala: Aula): Observable<Aula> {
    return this.http.post<Aula>(this.url, sala);
  }

}
