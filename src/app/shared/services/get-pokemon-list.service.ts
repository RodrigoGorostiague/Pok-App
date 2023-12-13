import { Injectable } from '@angular/core';
import { Species } from '../schemas/Species.schema';
import { Query, gql } from 'apollo-angular';
interface SpeciesListResponse {
  species: Species[];
}
@Injectable({
  providedIn: 'root'
})
export class GetPokemonListService extends Query<SpeciesListResponse>{
  
  override document = gql`
  query pokemonList($limit: Int!, $offset: Int!) {
    species: pokemon_v2_pokemonspecies(
      order_by: { generation_id: asc, id: asc }
      limit: $limit
      offset: $offset
    ) {
      name
      id
      generation_id
    }
  }
`;
}
