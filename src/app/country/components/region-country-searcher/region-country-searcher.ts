import { Component, computed, output, signal } from '@angular/core';

@Component({
  selector: 'region-country-searcher',
  imports: [],
  templateUrl: './region-country-searcher.html',
})
export class RegionCountrySearcher {
  region = output<string>();

  currentRegion =  signal<string>('')

  updateRegion(value: string) {
    this.currentRegion.set(value);
    this.region.emit(value);
  }
}
