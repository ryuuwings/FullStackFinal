import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get("http://localhost:4000/api/camareros");
  }

  postUser(postData){
    return this.http.post("http://localhost:4000/api/camareros", postData);
  }

  postClient(postData){
    return this.http.post("http://localhost:4000/api/clientes", postData);
  }
  postBill(postData){
    return this.http.post("http://localhost:4000/api/facturas", postData);
  }
  getDetailsByBill(){
    return this.http.get<any[]>("http://localhost:4000/api/detalles/facturas/"+ localStorage.getItem("idFactura"));
  }
  deleteDetail(iddetalles){
    return this.http.delete("http://localhost:4000/api/detalles/"+iddetalles)
  }
  postImage(postData){
    return this.http.post("http://localhost:4000/api/imagenes", postData);
  }
  postProduct(postData){
    return this.http.post("http://localhost:4000/api/productos",postData);
  }
  getProductsByType(type){
    return this.http.get<any[]>("http://localhost:4000/api/productos/tipo/"+type)
  }
  postDetail(postData){
    return this.http.post("http://localhost:4000/api/detalles", postData);
  }
  deleteProduct(id){
    return this.http.delete("http://localhost:4000/api/productos/"+id);
  }
  getProduct(id){
    return this.http.get<any[]>("http://localhost:4000/api/productos/"+id);
  }
  getImage(id){
    return this.http.get<any[]>("http://localhost:4000/api/imagenes/"+id);
  }
}
