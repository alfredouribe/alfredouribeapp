import { Component } from '@angular/core';
import { ElementoMenu } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menuElements: Observable<ElementoMenu[]>

  constructor(private menuCtrl: MenuController, private dataService: DataService) {
    this.initializeApp()
  }

  initializeApp(){
    this.menuElements = this.dataService.getMenuElements();
  }
}
