import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { }

  heroes:string[]=["Superman","Thor","Spiderman"]
  heroeBorrado: string="";

  ngOnInit(): void {
  }

  borrar() {
    console.log("borrando...");
    //const heroeBOrrado = this.heroes.splice(1,1);
    this.heroeBorrado = this.heroes.shift()||"";
    console.log(this.heroeBorrado);
  }

}
