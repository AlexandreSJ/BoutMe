import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private toastController: ToastController,
  ) {}

  async presentToast() {
    waitForAsync
    const toast = await this.toastController.create({
      message: 'Selecione abaixo para explorar',
      position: 'bottom',
      cssClass: 'tabTutorialToast',
      buttons: [
        {
          icon: 'close',
          role: 'cancel',
          handler: () => { localStorage.setItem('skipTabTutorial', ''); }
        }
      ]
    });
    await toast.present();
  }

  async tabTutorialStart(){
    await new Promise(f => setTimeout(f, 2500));
    this.presentToast();
  }

  ngOnInit(){
    if(localStorage.getItem('skipTabTutorial')==null){
      this.tabTutorialStart();
      
    }
  }

}
