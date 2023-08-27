import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent {

  apple = '';

  count = 0;

  receiveEvent(event: number) {
    this.count = event;
  }
  

}
