import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-lista-de-paises',
  templateUrl: './lista-de-paises.component.html',
  styleUrls: ['./lista-de-paises.component.css']
})
export class ListaDePaisesComponent implements OnInit {

  paises:Array<{ id: number, nombre: string }>
  elementoAntiguo!:HTMLElement;

    constructor( private renderer:Renderer2 ) {
      this.paises = [
        { id: 1, nombre: "Chile" },
        { id: 1, nombre: "Peru" },
        { id: 1, nombre: "Argentina" },
        { id: 1, nombre: "Bolivia" },
        { id: 1, nombre: "Brazil" },
      ]
    }

  mostrarActivo(element:HTMLElement, boton:HTMLElement){
    if(this.elementoAntiguo){
      this.renderer.removeClass(this.elementoAntiguo, 'destacado');
    }
    this.renderer.addClass(element, 'destacado');
    this.renderer.setAttribute(element, "data-seleccionado", "true");

    let nuevoElemento = this.renderer.createElement("span");
    this.renderer.setProperty(nuevoElemento, "innerHTML", "✅");
    this.renderer.appendChild(element, nuevoElemento);

    this.renderer.setAttribute(boton, "value", "A viajar ✈️");
    this.renderer.removeAttribute(boton, "disabled");

    this.elementoAntiguo = element;
  }

  ngOnInit(): void {
    console.log(this.paises)
  }

}
