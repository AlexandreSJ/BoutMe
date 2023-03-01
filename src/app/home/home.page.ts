import { Component, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  age: string;
  constructor(
    private toastController: ToastController,
    ) { }

  async presentToast() {
    waitForAsync
    const toast = await this.toastController.create({
      message: 'Selecione as abas para explorar',
      position: 'bottom',
      cssClass: 'tabTutorialToast',
      duration: 12000,
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
        }
      ]
    });
    await toast.present();
  }

  async tabTutorialStart(){
    await new Promise(f => setTimeout(f, 2500));
    this.presentToast();
  }
  
  ngOnInit() {
    var today = new Date();
    var birthDate = new Date('2002/09/17');
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    this.age = age.toString();

    this.tabTutorialStart();
    
  }
}
