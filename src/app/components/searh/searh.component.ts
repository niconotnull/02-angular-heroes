import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styles: [
  ]
})
export class SearhComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService,
               private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.heroes = this.heroesService.getBuscarHeroes(params.texto);
      this.termino = params.texto;
    });
  }

 
}
