import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.page.html',
  styleUrls: ['./console.page.scss'],
})
export class ConsolePage implements OnInit {

  newCommand: string = ""
  commands: Array<any> = []
  
  constructor(public alertController: AlertController, private dataService: DataService) { }

  ngOnInit() {
  }

  sendCommand(){
    
    if(this.newCommand){      
      this.dataService.processCommand(this.newCommand).subscribe(res =>{
        this.commands.push(res)
      })
      this.newCommand = ""
    }else{
      this.presentAlert()
    }
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '',
      message: 'You need to write a command',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

  }

}
