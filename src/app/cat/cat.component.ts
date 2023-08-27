import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {

  count =0;

  @Input() cat: string;
  @Output() catChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { 
    this.cat = 'cat';
  }

  fireEvent() {
    this.count += 1;
    this.catChange.emit(this.count);
  }



}
