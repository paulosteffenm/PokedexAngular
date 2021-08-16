import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  constructor(
    private apiService: ApiService,
  ) { }

    private pokemonIdInArray = 6;

    public getAllPokemons(): Observable<any> {
      return this.apiService.get('pokemon?limit=151').pipe(
        mergeMap((rawPokemons) => forkJoin(rawPokemons.map((rawPokemon) =>{
          const pokemonId = rawPokemon['url'].split('/')[this.pokemonIdInArray];
          return this.apiService.get(`pokemon/${pokemonId}`).pipe(
            map((pokemon) =>{
              console.log(pokemon);

              return pokemon;
            }),
          );
        },
        ))),
      );
    }
}
