import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit, OnDestroy {
  sliderObservable: Observable<string> = null;
  @Input() paths = [
    'as.jpg',
    '404.png',
    'cv.png',
    'rotating_card_profile.png',
    'rotating_card_profile2.png',
    'rotating_card_profile3.png',
  ];
  path = 'cv.png';
  @Input() size = 150;
  @Input() isRounded = true;
  @Input() timer = 1000;
  sliderSubscription: Subscription;
  constructor() {}

  ngOnInit(): void {
    this.sliderObservable = new Observable((observer) => {
      let i = 0;
      setInterval(() => {
        if (i === this.paths.length) {
          i = 0;
        }
        observer.next(this.paths[i++]);
      }, this.timer);
    });
    this.sliderSubscription = this.sliderObservable.subscribe(
      (path) => (this.path = path)
    );
  }

  ngOnDestroy() {
    this.sliderSubscription.unsubscribe();
  }
}
