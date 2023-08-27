import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    console.log('HelloWorldComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('HelloWorldComponent ngOnDestroy');
  }

}
