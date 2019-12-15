import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product-page',
  templateUrl: './create-product-page.page.html',
  styleUrls: ['./create-product-page.page.scss'],
})
export class CreateProductPagePage implements OnInit {
get tamano(){
    return this.createProductForm.get('tamano');
  }
  get nombreplato(){
    return this.createProductForm.get('nombreplato');
  }
  get allergens(){
    return this.createProductForm.get('allergens');
  }
  get descripcion(){
    return this.createProductForm.get('descripcion');
  }

  get infonutricional(){
    return this.createProductForm.get('infonutricional');
  }
  get precio(){
    return this.createProductForm.get('precio');
  }
  get tipo(){
    return this.createProductForm.get('tipo');
  }
  get ruta(){
    return this.createProductForm.get('ruta');
  }
  public errorMessages= {
    tamano: [
      {type: 'required', message: 'Size is required'}
    ],
    nombreplato: [
      {type: 'required', message: 'Product name is required'}
    ],
    allergens: [
      {type: 'required', message: 'Allergens are required'}
    ],
    descripcion: [
      {type: 'required', message: 'Description is required'}
    ],
    infonutricional: [
      {type: 'required', message: 'Nutritional info is required'}
    ],
    precio: [
      {type: 'required', message: 'Price is required'}
    ],
    tipo: [
      {type: 'required', message: 'Type is required'}
    ],
    ruta: [
      {type: 'required', message: 'Image route is required'}
    ]
  };

  createProductForm = this.FormBuilder.group({
    tamano: ['', [Validators.required]],
    nombreplato: ['', [Validators.required]],
    allergens: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    infonutricional: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    tipo: ['', [Validators.required]],
    ruta: ['', [Validators.required]]
  });

  

  constructor(private api: ServerService,private router: Router, private FormBuilder: FormBuilder) { }

  ngOnInit() {
  }
  private newImage;

  public submit(){
    let postData1={
      "ruta":this.createProductForm.get("ruta").value
    };
    this.api.postImage(postData1).subscribe((res:any)=>{
      this.newImage = res.data;
      let postData2 ={
        "tamaño": this.createProductForm.get("tamano").value,
        "nombreplato": this.createProductForm.get("nombreplato").value,
        "alérgenos": this.createProductForm.get("allergens").value,
        "descripcion": this.createProductForm.get("descripcion").value,
        "infonutricional": this.createProductForm.get("infonutricional").value,
        "precio": this.createProductForm.get("precio").value,
        "tipo": this.createProductForm.get("tipo").value,
        "imagenidimagen": this.newImage.idimagen
      }
      this.api.postProduct(postData2).subscribe();
      this.router.navigate(['/menu-page']);
    })
  }
}
