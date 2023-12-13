import { TestBed } from '@angular/core/testing';

import { GetPokemonListService } from './get-pokemon-list.service';

describe('GetPokemonListService', () => {
  let service: GetPokemonListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokemonListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
