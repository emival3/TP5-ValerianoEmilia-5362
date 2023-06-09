import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  producto = new Producto();
  accion:string="";

  constructor(private productoService:ProductoService,private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>{
        if(params['id'] == 0){
          this.accion = "new";
        }else{
          this.accion = "update";
          this.cargarProducto(params['id']);
        }
      }
    )
  }

  cargarProducto(id:string){
    this.productoService.getProducto(id).subscribe(
      result=>{
        Object.assign(this.producto,result);
      },
      error=>{

      }
    )
  }

  guardarProducto(){
    this.productoService.createProducto(this.producto).subscribe(
      result=>{
        if(result.status == 1){
          alert(result.msg);
        }
      },
      error=>{
        alert(error.msg);
      }
    )
    
    this.router.navigate(["producto"])
    
  }

  public cancelar() {
    this.router.navigate(["producto"]);
  }

}
