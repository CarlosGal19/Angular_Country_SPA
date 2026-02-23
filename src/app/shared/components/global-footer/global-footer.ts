import { Component } from '@angular/core';

@Component({
  selector: 'global-footer',
  imports: [],
  templateUrl: './global-footer.html',
})
export class GlobalFooter {
  currentYear = new Date().getFullYear();
}
