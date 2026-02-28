import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../../shared/components/country-search-input/country-search-input";
import { CountrySearchTable } from "../../components/country-search-table/country-search-table";
import { CountryService } from '../../services/country.service';
import { ICountryResponse } from '../../interfaces/country-response.interface';
import { ICountry } from '../../interfaces/country.interface';

@Component({
  selector: 'capital-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './capital-page.html',
})
export class CapitalPage {
  countryService = inject(CountryService);
  isLoading = signal(false);

  countries = signal<ICountry[]>([]);

  getCapital(capital: string) {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.countries.set([]);
    this.countryService.getCountriesByCapital(capital).subscribe((data) => {
      console.log(data);
      this.countries.set(data);
      this.isLoading.set(false);
    })
  }
}
