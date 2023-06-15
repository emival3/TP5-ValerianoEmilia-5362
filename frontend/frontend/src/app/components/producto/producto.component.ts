import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productosDestacados:Array<Producto>;
  productos: Array<Producto>;
  destacado!:boolean;

  constructor(private productoService:ProductoService, 
    private router:Router) { 
    this.productosDestacados = new Array<Producto>();
    this.productos = new Array<Producto>();
  }

  ngOnInit(): void {
    
  }

  obtenerProductosDestacados(){
    console.log("ENTRANDO A PRODUCTOS DESTACADOS");
    this.productos=new Array<Producto>();
    this.productoService.getProductosDestacados(this.destacado).subscribe(
      result=>{
        this.productosDestacados=result;
        let unProducto = new Producto();
        result.forEach((element:any) => {
          Object.assign(unProducto,element);
          this.productos.push(unProducto);
          unProducto = new Producto();
        });
      },
      error=>{
        alert(error);
      }
    )
  }

  obtenerProductos(){
    this.productoService.getProductos().subscribe(
      result=>{
        let unProducto = new Producto();
        result.forEach((element:any) => {
          Object.assign(unProducto,element);
          this.productos.push(unProducto);
          unProducto = new Producto();
        });
      },
      error=>{
        console.log(error);
      }
    )
  }

  agregarProducto(){
    this.router.navigate(["producto-form",0])
  }
}
