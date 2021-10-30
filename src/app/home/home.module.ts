import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { HomeComponent } from './pages/home.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HomeComponent, PokemonCardComponent],
  exports: [HomeComponent],
  providers: [],
})
export class HomeModule {}
