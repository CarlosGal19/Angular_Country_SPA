import { Component, input } from '@angular/core';
import { ICountryResponse } from '../../interfaces/country-response.interface';
import { ICountry } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'country-search-table',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-search-table.html',
})
export class CountrySearchTable {
  countries = input.required<ICountry[]>();

  errorMessage = input<string>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
