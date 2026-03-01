import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'not-found',
  imports: [],
  templateUrl: './not-found.html',
})
export class NotFoundComponent {
  // Location service helps to manage browser urls
  location = inject(Location);

  goBack() {
    this.location.back();
  }
}
