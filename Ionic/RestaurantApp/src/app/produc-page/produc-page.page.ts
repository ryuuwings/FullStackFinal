import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-produc-page',
  templateUrl: './produc-page.page.html',
  styleUrls: ['./produc-page.page.scss'],
})
export class ProducPagePage implements OnInit {

  private ruta;
  private nombreplato;
  private tamano;
  private precio;
  private allergens;
  private descripcion;
  private infonutricional;
  private tipo;

  constructor(private route: ActivatedRoute, private router: Router, private api: ServerService) { }

  private id;
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params.idplato;
    });
    this.getProduct(this.id);
    this.getImage(this.id);
  }

  ionViewWillEnter() {
    this.ngOnInit()
  }

  getProduct(id) {
    this.api.getProduct(id).subscribe((data) => {
      this.nombreplato = data['data']['nombreplato'];
      this.tamano = data['data']['tamaño'];
      this.precio = data['data']['precio'];
      this.allergens = data['data']['alérgenos'];
      this.descripcion = data['data']['descripcion'];
      this.infonutricional = data['data']['infonutricional'];
      this.tipo = data['data']['tipo'];
      console.log(this.nombreplato);
    })
  }
  getImage(id) {
    this.api.getImage(id).subscribe((data) => {
      this.ruta = data['data']['ruta'];
      console.log(this.ruta);
    })
  }
}
