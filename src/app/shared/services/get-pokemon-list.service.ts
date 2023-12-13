import { Injectable } from '@angular/core';
import { Species } from '../schemas/Species.schema';
import { Query, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface SpeciesListResponse {
  species: Species[];
}

@Injectable({
  providedIn: 'root'
})
export class GetPokemonListService extends Query<SpeciesListResponse> {
  override document = gql`
    query RandomPokemonList($limit: Int!, $offset: Int!) {
      species: pokemon_v2_pokemonspecies(
        limit: $limit
        offset: $offset
      ) {
        name
        id
        generation_id
      }
    }
  `;

  watchRandomPokemonList(limit: number, offset: number): Observable<Species[]> {
    return this.watch({ limit, offset }).valueChanges.pipe(
      map((response) => {
        const pokemonList = response.data.species;
        const copyPokemonList = [...pokemonList];
        return copyPokemonList.sort(() => Math.random() - 0.5);
      })
    );
  }

  private randomizePokemonList(pokemonList: Species[]) {
    return pokemonList.sort(() => Math.random() - 0.5);
  }
}
