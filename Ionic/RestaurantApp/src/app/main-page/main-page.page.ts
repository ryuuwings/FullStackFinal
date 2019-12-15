import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  variable1:any[] =[];

  constructor(private router: Router, private api: ServerService) { 
    this.getCarro();
  }

  ngOnInit() {
  }

  goToMenu(type){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        type: type
      }
      };
    this.router.navigate(["/menu-page"], navigationExtras)
  }
  getCarro(){
    this.api.getDetailsByBill().subscribe((data)=>{
      this.variable1 = data['detalles'];
    })
  }

  deleteDetail(iddetalle: number){
    this.api.deleteDetail(iddetalle).subscribe();
    this.getCarro();
  }
  confirmBill(){
    this.router.navigate(["/home"]);
  }
}
