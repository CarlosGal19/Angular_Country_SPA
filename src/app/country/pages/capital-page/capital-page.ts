import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../../shared/components/country-search-input/country-search-input";
import { CountrySearchTable } from "../../components/country-search-table/country-search-table";
import { CountryService } from '../../services/country.service';
import { ICountryResponse } from '../../interfaces/country-response.interface';

@Component({
  selector: 'capital-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './capital-page.html',
})
export class CapitalPage {
  countryService = inject(CountryService);

  countries = signal<ICountryResponse[]>([]);

  getCapital(capital: string) {
    this.countryService.getCountriesByCapital(capital).subscribe((data) => {
      this.countries.set(data);
    })
  }
}
