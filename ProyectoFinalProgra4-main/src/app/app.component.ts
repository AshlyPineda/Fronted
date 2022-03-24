import { Component } from '@angular/core';
//import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isCollapsed = false;

  datosMenu=[{


  }];
}
