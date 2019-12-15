import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {
  private type;
  productos:any[] =[];
  constructor(private api: ServerService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.type = params.type;
      });
      console.log(this.type);
      this.getMenu();
  }
  ionViewWillEnter(){
    this.ngOnInit()
  }

  consultProduct(idplato: number)
  {
    let navigationExtras: NavigationExtras = {
    queryParams: {
      idplato
    }
    };
    this.router.navigate(["/produc-page"], navigationExtras)
  }
  goToAddProduct(){
    this.router.navigate(['/create-product-page']);
  }

  goToMain(){
    this.router.navigate(['/main-page']);
  }

  addToCart(idplato: number){
    let postData={
      "facturaidfactura": localStorage.getItem("idFactura"),
      "platoidplato": idplato
    }
    this.api.postDetail(postData).subscribe();
    
  }

  getMenu(){
    this.api.getProductsByType(this.type).subscribe((data)=>{
      this.productos = data['data'];
    })
  }
}
