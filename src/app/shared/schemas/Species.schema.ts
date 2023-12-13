export interface Ability {
    ability: {
      name: string;
    };
  }
  
  export interface Stat {
    base_stat: number;
    stat: {
      name: string;
    };
  }
  
  export interface Type {
    slot: number;
    type: {
      name: string;
    };
  }
  
  export interface LevelUpMove {
    move: {
      name: string;
    };
    level: number;
  }
  
  export interface EncounterAggregate {
    aggregate: {
      count: number;
    };
  }
  
  export interface Item {
    pokemon_v2_item: {
      name: string;
      cost: number;
    };
    rarity: string;
  }
  
  export interface Pokemon {
    height: number;
    name: string;
    id: number;
    weight: number;
    abilities:{
      nodes: Ability[]
    };
    stats: Stat[];
    types: Type[];
    levelUpMoves: LevelUpMove[];
    foundInAsManyPlaces: EncounterAggregate;
    fireRedItems: Item[];
  }
  
  export interface FlavorText {
    flavor_text: string;
  }
  
  export interface Species {
    id: number;
    name: string;
    base_happiness: number;
    is_legendary: boolean;
    is_mythical: boolean;
    generation: {
      name: string;
    };
    habitat: {
      name: string;
    };
    pokemon: {
      nodes: Pokemon[];
    };
    flavorText: FlavorText[];
  }
  
  