import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { TransaccionService } from 'src/app/services/transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  transaccion!: Transaccion;
  monedas!: Array<any>;
  transacciones: Array<Transaccion>;
  transaccionesFiltro: Array<Transaccion>;
  
  filtro!: boolean;
  click!:boolean;
  monedaOrigen!: string;
  monedaDestino!: string;

  constructor(private transaccionService: TransaccionService,  private router:Router) {
    this.transacciones = new Array<Transaccion>();
    this.transaccionesFiltro = new Array<Transaccion>();
    this.transaccion = new Transaccion();
    this.monedas = new Array<any>();
    this.obtenerMonedas();

  }

  ngOnInit(): void {
  }

  public obtenerMonedas(){
    this.transaccionService.getMonedas().subscribe(
      (result)=>{ // devuelve un arreglo
        for(let i:number=0; i<10;i++){ //solo carga los 10 primeros de los 162 que hay
          this.monedas.push(result[i]);
        }
        console.log(this.monedas);
      },
      error => {
        alert("Error");
      }
    )
  }

  obtenerTransacciones() {
    this.transaccionService.getTransacciones().subscribe(
      result => {
        let unaTransaccion = new Transaccion();
        result.forEach((element: any) => {
          Object.assign(unaTransaccion, element);
          this.transacciones.push(unaTransaccion);
          unaTransaccion = new Transaccion();
        });
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )
  }

obtenerTransaccionesPorFiltro() {
  this.transacciones = new Array<Transaccion>();
  this.transaccionService.getTransaccionesPorFiltro(this.monedaOrigen, this.monedaDestino).subscribe(
    result => {
      console.log(result);
      this.transaccionesFiltro = result;
      let unaTransaccion = new Transaccion();
      result.forEach((element:any) => {
        Object.assign(unaTransaccion,element);
        this.transacciones.push(unaTransaccion);
        unaTransaccion = new Transaccion();
      });
    },
    error => {
      console.log(error);
    }
  )
}
  agregarTransaccion(){
    this.router.navigate(["transaccion-form",0])
  }
}
