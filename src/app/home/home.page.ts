import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonRefresher, IonRefresherContent, IonToggle, IonAvatar, IonItem, IonList, IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/angular/standalone';
import { Species } from '../shared/schemas/Species.schema';
import { InfiniteScrollCustomEvent } from '@ionic/core';
import { GetPokemonListService } from '../shared/services/get-pokemon-list.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ RouterLink, IonRefresher, IonRefresherContent,IonAvatar, IonItem, IonList,IonTitle, IonContent, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, TitleCasePipe, IonToggle, IonIcon ],
})
export class HomePage implements OnInit {

  private pokeListSvc = inject(GetPokemonListService);
  pokemons = signal<Species[]>([])
  limit = 20;
  offset = 0;

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokeListSvc.watchRandomPokemonList(this.limit, this.offset).subscribe({
      next: (result) => {
        this.pokemons.set(result);
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  onIonInfinite(ev: Event) {
    this.offset += this.limit;
    this.limit += 10;
    this.pokeListSvc.watchRandomPokemonList(this.limit, this.offset).subscribe({
      next: (result) => {
        this.pokemons.update((pokemons) => pokemons.concat(result));
        (ev as InfiniteScrollCustomEvent).target.complete()
      },
      error: (err) => {
        console.log(err);
      },
    });    
  }

  doRefresh(ev: any) {
    this.offset = 0;
    this.limit = 10;
    this.pokeListSvc.watchRandomPokemonList(this.limit, this.offset).subscribe({
      next: (result) => {
        this.pokemons.set(result);
        ev.target.complete();
      },
      error: (err) => {
        console.log(err);
      },
    });
  } 
}
