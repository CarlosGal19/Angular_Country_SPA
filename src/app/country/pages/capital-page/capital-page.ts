import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from '../../../shared/components/country-search-input/country-search-input';
import { CountrySearchTable } from '../../components/country-search-table/country-search-table';
import { CountryService } from '../../services/country.service';
import { ICountryResponse } from '../../interfaces/country-response.interface';
import { ICountry } from '../../interfaces/country.interface';
import { firstValueFrom, Observable, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'capital-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './capital-page.html',
})
export class CapitalPage {
  countryService = inject(CountryService);

  query = signal('');

  countryResource = rxResource({
    params: () => ({
      query: this.query()
    }),
    stream: ({ params }) => {
      if (params.query == '') return of([]);

      // firstValueFrom parse an observable to a source reference (signal)
      return this.countryService.getCountriesByCapital(params.query)
    }
  })

  // countryResource = resource({
  //   params: () => ({
  //     query: this.query()
  //   }),
  //   loader: async ({ params }): Promise<ICountry[]> => {
  //     if (params.query == '') return [];

  //     // firstValueFrom parse an observable to a source reference (signal)
  //     return await firstValueFrom(this.countryService.getCountriesByCapital(params.query))
  //   }
  // })
}
