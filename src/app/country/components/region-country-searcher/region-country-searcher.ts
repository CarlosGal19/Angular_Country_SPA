import { Component, output, signal } from '@angular/core';
import { Region } from '../../interfaces/region-options.type';

@Component({
  selector: 'region-country-searcher',
  imports: [],
  templateUrl: './region-country-searcher.html',
})
export class RegionCountrySearcher {
  region = output<string>();

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  currentRegion =  signal<string>('')

  updateRegion(value: string) {
    this.currentRegion.set(value);
    this.region.emit(value);
  }
}
