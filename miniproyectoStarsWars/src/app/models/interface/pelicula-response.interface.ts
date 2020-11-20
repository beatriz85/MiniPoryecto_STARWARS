import {Pelicula} from './pelicula.interface';

export interface PeliculaResponse {
    count: number;
    next?: any;
    previous?: any;
    results: Pelicula[];
}



