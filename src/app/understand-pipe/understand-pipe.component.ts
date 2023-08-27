import { Component } from '@angular/core';

@Component({
  selector: 'app-understand-pipe',
  templateUrl: './understand-pipe.component.html',
  styleUrls: ['./understand-pipe.component.css']
})
export class UnderstandPipeComponent {

  animal = 'dog';
  date = new Date();
  amount = 0.12345;
  totalAmount = 12312312;
  address = {
    street: '123 Drew Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94117'
  };
}
