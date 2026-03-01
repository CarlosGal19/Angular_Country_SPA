import { DecimalPipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ICountry } from '../../../interfaces/country.interface';

@Component({
  selector: 'country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
})
export class CountryInformation {

  country = input.required<ICountry>();

  currentYear = signal(new Date().getFullYear())
}
