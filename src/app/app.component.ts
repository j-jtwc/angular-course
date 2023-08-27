import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'demo-angular';

  headerColor = 'red';

  accountList = [
    { name: 'Account 1', id: 1 },
    { name: 'Account 2', id: 2 },
    { name: 'Account 3', id: 3 },
    { name: 'Account 4', id: 4 },
    { name: 'Account 5', id: 5 },
  ]


  // ngOnInit(): void {
  //   console.log('App ngOnInit');
  // }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }

  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }




  changeColor() {
    this.headerColor = 'blue';
  }
}
