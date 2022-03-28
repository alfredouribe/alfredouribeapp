import { Component, Input, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ElementoMenu } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string=''

  menuElements: Observable<ElementoMenu[]>

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {

  }

  mostrarMenu(){
    this.menuCtrl.open();
  }
}
