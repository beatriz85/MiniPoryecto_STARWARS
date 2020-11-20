import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlanetsService } from './services/planets.service';
import { PlanetsListadoComponent } from './planets-listado/planets-listado.component';

import { PeliculasService} from './services/peliculas.service';
import { PeliculasListadoComponent } from './peliculas-listado/peliculas-listado.component'


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListadoComponent,
    PeliculasListadoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule
  ],
  //providers: [PlanetsService],
  providers: [PeliculasService],

  bootstrap: [AppComponent]
})
export class AppModule { }