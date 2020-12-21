import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lp-feedback-button',
  templateUrl: './feedback-button.component.html',
  styles: [
  ]
})
export class LpFeedbackButtonComponent {

  constructor() { }

  giveFeedback(): void {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScdm8MKGdySKlLVJRlaMebj4-CvA23IayE-m6UWmrzxjCUZOQ/viewform?usp=sf_link");
  }

}
