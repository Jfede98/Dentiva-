import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface ServicioDental {
  titulo: string;
  descripcion: string;
  imagen: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiciosDentalesService {
  private apiUrl = 'https://682d61d94fae18894755c0c8.mockapi.io/serviciosDentales';

  constructor(private http: HttpClient) {}

  getServicios(): Observable<ServicioDental[]> {
    return this.http.get<ServicioDental[]>(this.apiUrl);
  }
}
