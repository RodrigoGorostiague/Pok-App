import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GetPokemonService } from '../../services/get-pokemon.service';
import { Species } from '../../schemas/Species.schema';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { NgClass, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, TitleCasePipe, NgClass, RouterLink],
})
export class PokeDetailComponent  implements OnInit { 
  pokemon = signal<Species | null>(null);

  private route = inject(ActivatedRoute);
  private getPokemon = inject(GetPokemonService)

  constructor(
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getPokemon.watch({ id: params["id"] }).valueChanges.subscribe((result) => {
        this.pokemon.set(result.data.species);
        console.log(this.pokemon())
        console.log(this.pokemon()?.pokemon.nodes[0].stats[0].base_stat)
      });
    });

  }

}
