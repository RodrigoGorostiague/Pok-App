"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[447],{7447:(F,f,c)=>{c.r(f),c.d(f,{PokeDetailComponent:()=>Z});var n=c(6242),k=c(1591),_=c(2686);let b=(()=>{var e;class a extends _.AE{constructor(){super(...arguments),this.document=_.Ps`
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
    }`}}return(e=a).\u0275fac=(()=>{let o;return function(r){return(o||(o=n.n5z(e)))(r||e)}})(),e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var p=c(6205),x=c(6814);let h=(()=>{var e;class a{transform(t,r){if(void 0===t||isNaN(t))return"N/A";switch(r){case"kg":return t/10+" kg";case"m":return t/10+" m";default:return"N/A"}}}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Yjl({name:"formatMeasure",type:e,pure:!0,standalone:!0}),a})();const y=(e,a,o,t,r,l,d,g,u,i,s,m,A,T,w,U,q,D)=>({grass:e,poison:a,fire:o,flying:t,water:r,bug:l,normal:d,electric:g,ground:u,fairy:i,fighting:s,psychic:m,rock:A,steel:T,ice:w,ghost:U,dragon:q,dark:D});function P(e,a){if(1&e&&(n.TgZ(0,"span",7),n._uU(1),n.ALo(2,"titlecase"),n.qZA(),n._uU(3)),2&e){const o=a.$implicit,t=a.$index,r=n.oxw(2);let l;n.Q6J("ngClass",n.rFY(5,y,["grass"===o.type.name,"poison"===o.type.name,"fire"===o.type.name,"flying"===o.type.name,"water"===o.type.name,"bug"===o.type.name,"normal"===o.type.name,"electric"===o.type.name,"ground"===o.type.name,"fairy"===o.type.name,"fighting"===o.type.name,"psychic"===o.type.name,"rock"===o.type.name,"steel"===o.type.name,"ice"===o.type.name,"ghost"===o.type.name,"dragon"===o.type.name,"dark"===o.type.name])),n.xp6(1),n.hij(" ",n.lcZ(2,3,o.type.name)," "),n.xp6(2),n.hij(" ",(null==(l=r.pokemon())||null==l.pokemon||null==l.pokemon.nodes||null==l.pokemon.nodes[0]||null==l.pokemon.nodes[0].types?null:l.pokemon.nodes[0].types.length)===t-1?", ":""," ")}}function C(e,a){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.ALo(2,"titlecase"),n.qZA()),2&e){const o=a.$implicit,t=a.$index,r=n.oxw(2);let l;n.xp6(1),n.AsE(" ",n.lcZ(2,2,o.ability.name)," ",(null==(l=r.pokemon())||null==l.pokemon||null==l.pokemon.nodes||null==l.pokemon.nodes[0]||null==l.pokemon.nodes[0].abilities||null==l.pokemon.nodes[0].abilities.nodes?null:l.pokemon.nodes[0].abilities.nodes.length)===t-1?", ":"."," ")}}function v(e,a){if(1&e&&(n.TgZ(0,"ion-col",8)(1,"p"),n._uU(2),n.ALo(3,"titlecase"),n.qZA()()),2&e){const o=a.$implicit;n.xp6(2),n.AsE("",n.lcZ(3,2,o.stat.name),": ",o.base_stat,"")}}const M=()=>["/home"];function O(e,a){if(1&e&&(n.TgZ(0,"a",0),n._uU(1,"Return to Pokeon List"),n.qZA(),n.TgZ(2,"ion-card",1),n._UZ(3,"img",2),n.TgZ(4,"ion-card-header")(5,"ion-card-title",3),n._uU(6),n.ALo(7,"titlecase"),n.qZA(),n.TgZ(8,"ion-card-subtitle",4),n._uU(9),n.qZA()(),n.TgZ(10,"ion-card-content",5)(11,"p"),n._uU(12),n.ALo(13,"titlecase"),n.qZA(),n.TgZ(14,"p"),n._uU(15,"Type: "),n.SjG(16,P,4,24,null,null,n.x6l),n.qZA(),n.TgZ(18,"p"),n._uU(19),n.ALo(20,"formatMeasure"),n.ALo(21,"formatMeasure"),n.qZA(),n.TgZ(22,"p"),n._uU(23,"Abilities: "),n.SjG(24,C,3,4,"span",null,n.x6l),n.qZA(),n.TgZ(26,"ion-grid",6)(27,"p"),n._uU(28,"Stats:"),n.qZA(),n.TgZ(29,"ion-row"),n.SjG(30,v,4,4,"ion-col",9,n.x6l),n.qZA()()()()),2&e){const o=n.oxw();let t,r,l,d,g,u,i,s,m;n.Q6J("routerLink",n.DdM(18,M)),n.xp6(3),n.s9C("alt",null==(t=o.pokemon())?null:t.name),n.Q6J("src","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+(null==(r=o.pokemon())?null:r.id)+".svg",n.LSH),n.xp6(3),n.Oqu(n.lcZ(7,8,null==(l=o.pokemon())?null:l.name)),n.xp6(3),n.Oqu(null==(d=o.pokemon())||null==d.flavorText||null==d.flavorText[0]?null:d.flavorText[0].flavor_text),n.xp6(3),n.hij("Habitat: ",n.lcZ(13,10,null==(g=o.pokemon())||null==g.habitat?null:g.habitat.name),""),n.xp6(4),n.wJu(null==(u=o.pokemon())||null==u.pokemon||null==u.pokemon.nodes||null==u.pokemon.nodes[0]?null:u.pokemon.nodes[0].types),n.xp6(3),n.AsE("Height: ",n.xi3(20,12,null==(i=o.pokemon())||null==i.pokemon||null==i.pokemon.nodes||null==i.pokemon.nodes[0]?null:i.pokemon.nodes[0].height,"m"),". Weight: ",n.xi3(21,15,null==(i=o.pokemon())||null==i.pokemon||null==i.pokemon.nodes||null==i.pokemon.nodes[0]?null:i.pokemon.nodes[0].weight,"kg"),"."),n.xp6(5),n.wJu(null==(s=o.pokemon())||null==s.pokemon||null==s.pokemon.nodes||null==s.pokemon.nodes[0]||null==s.pokemon.nodes[0].abilities?null:s.pokemon.nodes[0].abilities.nodes),n.xp6(6),n.wJu(null==(m=o.pokemon())||null==m.pokemon||null==m.pokemon.nodes||null==m.pokemon.nodes[0]?null:m.pokemon.nodes[0].stats)}}let Z=(()=>{var e;class a{constructor(){this.pokemon=(0,n.tdS)(null),this.route=(0,n.f3M)(k.gz),this.getPokemon=(0,n.f3M)(b)}ngOnInit(){this.route.params.subscribe(t=>{this.getPokemon.watch({id:t.id}).valueChanges.subscribe(r=>{var l;this.pokemon.set(r.data.species),console.log(this.pokemon()),console.log(null===(l=this.pokemon())||void 0===l?void 0:l.pokemon.nodes[0].stats[0].base_stat)})})}}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-poke-detail"]],standalone:!0,features:[n.jDz],decls:1,vars:1,consts:[[3,"routerLink"],[1,"custom-card"],[1,"centered-image",3,"alt","src"],[1,"custom-title"],[1,"custom-subtitle"],[1,"custom-content"],[1,"stats-conteiner"],[3,"ngClass"],["size","4",1,"stat-item"],["size","4","class","stat-item"]],template:function(t,r){1&t&&n.YNc(0,O,32,19),2&t&&n.um2(0,null!=r.pokemon()?0:-1)},dependencies:[p.PM,p.FN,p.Zi,p.tO,p.Dq,p.jY,p.Nd,p.wI,x.rS,x.mk,k.rH,h],styles:[".custom-card[_ngcontent-%COMP%]{width:80%;margin:auto;text-align:center}.centered-image[_ngcontent-%COMP%]{display:block;margin:0 auto;max-width:100%}.custom-title[_ngcontent-%COMP%]{font-size:1.5em;font-weight:700}.custom-subtitle[_ngcontent-%COMP%]{color:#555}.custom-content[_ngcontent-%COMP%]{padding:10px}.stats-conteiner[_ngcontent-%COMP%]{border:1px solid #ccc;padding:0;border-radius:4px}.grass[_ngcontent-%COMP%]{background-color:#78c850;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.poison[_ngcontent-%COMP%]{background-color:#a040a0;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.fire[_ngcontent-%COMP%]{background-color:#f08030;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.flying[_ngcontent-%COMP%]{background-color:#a890f0;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.water[_ngcontent-%COMP%]{background-color:#6890f0;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.bug[_ngcontent-%COMP%]{background-color:#a8b820;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.normal[_ngcontent-%COMP%]{background-color:#a8a878;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.electric[_ngcontent-%COMP%]{background-color:#f8d030;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.ground[_ngcontent-%COMP%]{background-color:#e0c068;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.fairy[_ngcontent-%COMP%]{background-color:#ee99ac;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.fighting[_ngcontent-%COMP%]{background-color:#c03028;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.psychic[_ngcontent-%COMP%]{background-color:#f85888;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.rock[_ngcontent-%COMP%]{background-color:#b8a038;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.steel[_ngcontent-%COMP%]{background-color:#b8b8d0;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.ice[_ngcontent-%COMP%]{background-color:#98d8d8;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.ghost[_ngcontent-%COMP%]{background-color:#705898;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.dragon[_ngcontent-%COMP%]{background-color:#7038f8;color:#fff;padding:4px;border-radius:2px;margin-left:1px}.dark[_ngcontent-%COMP%]{background-color:#705848;color:#fff;padding:4px;border-radius:2px;margin-left:1px}a[_ngcontent-%COMP%]{display:inline-block;padding:10px;margin-left:auto;text-decoration:none;font-weight:700;font-size:16px;color:#fff;background-color:red;border-radius:5px;transition:background-color .3s ease}a[_ngcontent-%COMP%]:hover{background-color:gold}a[_ngcontent-%COMP%]:active{box-shadow:inset 0 0 5px #00000080}img[_ngcontent-%COMP%]{max-width:220px!important}"]}),a})()}}]);