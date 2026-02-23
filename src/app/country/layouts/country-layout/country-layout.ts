import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountriesNavigation } from '../../components/countries-navigation/countries-navigation';

@Component({
  selector: 'country-layout',
  imports: [RouterOutlet, CountriesNavigation],
  templateUrl: './country-layout.html',
})
export class CountryLayout {

}
