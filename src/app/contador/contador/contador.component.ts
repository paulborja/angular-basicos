import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo {{title}}</h1>
        <h2>La base es <strong> {{base}}</strong></h2>

        <button (click)=acumular(base)>acumular {{base}}</button>
        <button (click)=sumar()>+1</button>
        <span> {{numero}} </span>
        <button (click)="restar()">-1</button>
        <button (click)=acumular(base*(-1))>acumular -{{base}}</button>

        `
})

export class ContadorComponent{
    public title: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
  
    sumar(){
      this.numero+=1;
    }
    restar(){
      this.numero-=1;
    }
    acumular(valor:number){
      this.numero+=valor;
    }
  
}