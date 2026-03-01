import { Component, ElementRef, input, output, ViewChild } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {
  @ViewChild('inCapital', { static: false }) inputCapital!: ElementRef;
  capital = output<string>();
  placeholderMessage = input.required<String>();

  getCapital(capital: string) {
    if (!capital) return;
    this.capital.emit(capital)
    this.inputCapital.nativeElement.value = '';
  }
}
