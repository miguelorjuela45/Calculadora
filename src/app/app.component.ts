import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numero1 = null;
  numero2 = null;
  resultado = null;
  operador = '';

  calcular(){
    if (this.numero1 == null && this.numero2 == null)
    {
      return null;
    }
    if(this.operador == '+')
    {
      this.resultado = this.numero1 + this.numero2;
    }
    if(this.operador == '-')
    {
      this.resultado = this.numero1 - this.numero2;
    }
    if(this.operador == '*')
    {
      if (this.numero1 == null || this.numero2 == null)
      {
        return null;
      }
      this.resultado = this.numero1 * this.numero2;
    }
    if(this.operador == '/')
    {
      if (this.numero1 == null || this.numero2 == null || this.numero2 == 0)
      {
        return null;
      }
      this.resultado = this.numero1 / this.numero2;
    }
    if(this.operador == '%')
    {
      if (this.numero1 == null || this.numero2 == null || this.numero2 == 0)
      {
        return null;
      }
      this.resultado = this.numero1 % this.numero2;
    }
    return this.resultado;
  }
  borrar(){
    this.numero1 = null;
    this.numero2 = null;
    this.resultado = null;
    this.operador = '';
  }
}
