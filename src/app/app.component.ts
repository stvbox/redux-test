import { Component } from '@angular/core';
import { color } from './data-source.service';
import { Observable, observable, Subscribable, Subscriber } from 'rxjs';
import { EventEmitter } from 'events';

class Thing {

}

class ThingObservable extends Observable<Thing> {
  interval: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-redux';
  counter = 0;
  emiter: EventEmitter = new EventEmitter();
  interval: any;

  constructor() {
    this.interval = setInterval(() => {
      this.emiter.emit('test', ++this.counter);
    }, 1000);

    this.emiter.on('test', (...params) => {
      console.log( params );
    });

  }

  addColor() {
    const action = {
      type: 'ADD_COLOR',
      id: '4243e1p0-9abl-4e90-95p4-8001l8yf3036',
      color: '#0000FF',
      title: 'Big Blue',
      timestamp: new Date()
    };

    console.log( color({}, action) );
  }
}
