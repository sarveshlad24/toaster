import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;
  birthday: any;
  email:any

  constructor(private toastController: ToastController) {
    
  }

  

  async save() {
    if (this.name && this.email) {
      const toast = await this.toastController.create({
        message: 'User profile was saved successfully',
        position: 'middle',
        color: 'success',
        duration: 2000
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'User profile field is not filled',
        position: 'middle',
        color: 'danger',
        duration: 2000
      });
      toast.present();
    }
  }
}
