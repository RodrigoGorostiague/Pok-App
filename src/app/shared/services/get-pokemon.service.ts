import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';
import { Species } from '../schemas/Species.schema';


interface SpeciesResponse {
  species: Species;
}

@Injectable({
  providedIn: 'root'
})
export class GetPokemonService extends Query<SpeciesResponse>{

  override document = gql`
  query pokemon($id: Int!) {    
    species: pokemon_v2_pokemonspecies_by_pk(id: $id) {
        id
        name
        base_happiness
        is_legendary
        is_mythical
        generation: pokemon_v2_generation {
          name
        }
        habitat: pokemon_v2_pokemonhabitat {
          name
        }
        pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
          nodes {
            height
            name
            id
            weight
            abilities: pokemon_v2_pokemonabilities_aggregate {
              nodes {
                ability: pokemon_v2_ability {
                  name
                }
              }
            }
            stats: pokemon_v2_pokemonstats {
              base_stat
              stat: pokemon_v2_stat {
                name
              }
            }
            types: pokemon_v2_pokemontypes {
              slot
              type: pokemon_v2_type {
                name
              }
            }
          }
        }
        flavorText: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {name: {_eq: "firered"}}}) {
          flavor_text
        }
      }
    }`;
}
