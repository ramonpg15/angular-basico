import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Capitan America']
  heroeBorrado? = ''
  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  borrarHeroe() {
    let heroeBorrado = this.heroes.shift()
    this.heroeBorrado = heroeBorrado
    console.log(heroeBorrado);
  }

}
