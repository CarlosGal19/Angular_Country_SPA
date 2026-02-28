import { Component, input } from '@angular/core';
import { ICountryResponse } from '../../interfaces/country-response.interface';

@Component({
  selector: 'country-search-table',
  imports: [],
  templateUrl: './country-search-table.html',
})
export class CountrySearchTable {
  countries = input.required<ICountryResponse[]>();
}
