import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../core/services/pokemons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
  ) { }

  public pokemons = [];

  public isLoading = true;

  ngOnInit(): void {
    this.pokemonService.getAllPokemons().subscribe((pokemons) => {
      this.pokemons = pokemons;
      this.isLoading = false;
    });
  }
}
