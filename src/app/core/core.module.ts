import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ApiService,
  PokemonService,
} from './services';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ApiService,
    PokemonService,
  ],
  declarations: [],
})
export class CoreModule { }
