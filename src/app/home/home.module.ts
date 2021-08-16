import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';


@NgModule({
  imports: [],
  declarations: [

  
    PokemonCardComponent
  ],
  providers: [
    HomeComponent,
  ],
})
export class HomeModule { }
