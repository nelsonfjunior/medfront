import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Medicamento } from '../interfaces/medicamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  ApiUrl = environment.UrlApi;

  constructor(private httpClient: HttpClient) { }

  getMedicamentos(): Observable<Medicamento[]> {
    return this.httpClient.get<Medicamento[]>(this.ApiUrl + '/findAll');
  }

  getMedicamento(id: number): Observable<Medicamento> {
    return this.httpClient.get<Medicamento>(this.ApiUrl + '/findById/' + id);
  }

  createMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.httpClient.post<Medicamento>(this.ApiUrl + '/save', medicamento);
  }

  updateMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.httpClient.put<Medicamento>(this.ApiUrl + '/update/' + medicamento.id, medicamento);
  }

  deleteMedicamento(id: number): Observable<Medicamento> {
    return this.httpClient.delete<Medicamento>(this.ApiUrl + '/delete/' + id);
  }
}
