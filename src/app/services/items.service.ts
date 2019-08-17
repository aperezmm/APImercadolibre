import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ItemsService {
    
    public API = 'https://api.mercadolibre.com/sites/MCO/search?q=';
 
  

  constructor(private http: HttpClient) {
  }

  getAll(filtro: string): Observable<any> {
    return this.http.get(this.API + filtro);
  }

 }