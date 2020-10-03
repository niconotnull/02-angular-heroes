import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroeInput: any = {};
  @Input() index: number;

  @Output() hereoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.hereoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verheroeInput(){
     this.router.navigate(['/heroe', this.index]);
  }
}
