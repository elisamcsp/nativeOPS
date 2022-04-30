import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navController: NavController) { } 

  ngOnInit() {    
  }

  goToPhoto(){
    this.navController.navigateForward('/photo');
  }

  goToList(){
    this.navController.navigateForward('/list');
  }
  

}