import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../models/interface/pelicula.interface';
import { PeliculaResponse } from '../models/interface/pelicula-response.interface'


const authURL = 'https://swapi.dev/api/films/';
const requestOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  constructor(private http: HttpClient) {  
  }

  public getPeliculas(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(
      authURL,
      requestOptions
    );
  }
}