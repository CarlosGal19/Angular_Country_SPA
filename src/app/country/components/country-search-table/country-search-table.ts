import { Component, input } from '@angular/core';
import { ICountryResponse } from '../../interfaces/country-response.interface';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'country-search-table',
  imports: [],
  templateUrl: './country-search-table.html',
})
export class CountrySearchTable {
  countries = input.required<ICountry[]>();
}
