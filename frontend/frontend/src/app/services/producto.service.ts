import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http:HttpClient) { }

  getProducto(id:string):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()

    }

    return this.http.get("http://localhost:3000/api/producto/"+id,httpOptions);
  }

  getProductos():Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()

    }

    return this.http.get("http://localhost:3000/api/producto",httpOptions);
  }

  getProductosDestacados(destacado:boolean):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {

        }
      ),
      params: new HttpParams()
      .append("destacadoP",destacado)
    }

    return this.http.get("http://localhost:3000/api/producto/destacado",httpOptions);
  }

  createProducto(producto:Producto):Observable<any>{
    let httpOptions={
      headers: new HttpHeaders(
        {
          "Content-type": "application/json"
        }
      ),
      params: new HttpParams()

    }
    
    let body = JSON.stringify(producto);

    return this.http.post("http://localhost:3000/api/producto",body,httpOptions);
  }
}
