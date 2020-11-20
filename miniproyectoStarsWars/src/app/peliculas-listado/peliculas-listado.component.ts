import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../models/interface/pelicula.interface';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas-listado',
  templateUrl: './peliculas-listado.component.html',
  styleUrls: ['./peliculas-listado.component.scss']
})
export class PeliculasListadoComponent implements OnInit {

  listadoPeliculas : Pelicula[];
  columnsToDisplay = ['title', 'episode_id','opening_crawl','director','producer','release_date'];
    constructor(private peliculaService: PeliculasService) { }

  

  ngOnInit() {
    this.loadPeliculas();
  }

  loadPeliculas() {
    this.peliculaService.getPeliculas().subscribe(resp => {
      this.listadoPeliculas = resp.results;
    });
  }
}
