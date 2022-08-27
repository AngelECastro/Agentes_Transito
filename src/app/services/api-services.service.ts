import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor( private http: HttpClient )  { }

  get(url: string, params: HttpParams = new HttpParams()){
    return this.http.get(url, { params });
}
}
