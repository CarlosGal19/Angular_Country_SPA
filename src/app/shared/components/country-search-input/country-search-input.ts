import { Component, effect, ElementRef, input, linkedSignal, output, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {
  // @ViewChild('inCapital', { static: false }) inputCapital!: ElementRef;
  capital = output<string>();
  placeholderMessage = input.required<String>();

  initialValue = input<string>();
  inputValue = linkedSignal<string>(() => this.initialValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.getCapital(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    })
  })

  getCapital(capital: string) {
    if (!capital) return;
    this.capital.emit(capital)
    // this.inputCapital.nativeElement.value = '';
  }
}
