import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FormContacto {
  nombre: string;
  correo: string;
  telefono: string;
  tipoConsulta: string;
  asunto: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private apiUrl = 'https://682d61d94fae18894755c0c8.mockapi.io/mensajes';

  constructor(private http: HttpClient) {}

  enviarMensaje(data: FormContacto): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
