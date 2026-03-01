import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../../shared/components/country-search-input/country-search-input";
import { CountryService } from '../../services/country.service';
import { CountrySearchTable } from '../../components/country-search-table/country-search-table';
import { ICountry } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'country-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryService = inject(CountryService);

  query = signal('');

  countryNameResource = resource({
    params: () => ({
      name: this.query()
    }),
    loader: async ({params}): Promise<ICountry[]> => {
      if (params.name == '') return [];

      return await firstValueFrom(this.countryService.getCountriesByName(params.name));
    }
  })
}
