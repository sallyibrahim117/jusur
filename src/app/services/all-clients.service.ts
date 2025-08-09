import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments';

@Injectable({
  providedIn: 'root'
})
export class AllClientsService {

  constructor(private http:HttpClient) { }
    allclients():Observable<any>{
    return this.http.get(`${environment.apiUrl}/Client/AllClients`);

    }}
