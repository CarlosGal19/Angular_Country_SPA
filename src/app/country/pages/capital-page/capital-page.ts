import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from '../../../shared/components/country-search-input/country-search-input';
import { CountrySearchTable } from '../../components/country-search-table/country-search-table';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'capital-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './capital-page.html',
})
export class CapitalPage {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = signal(this.queryParam);

  // Resource works with observables
  // Resource works with promises
  countryResource = rxResource({
    params: () => ({
      query: this.query()
    }),
    stream: ({ params }) => {
      if (params.query == '') return of([]);

      // firstValueFrom parse an observable to a source reference (signal)
      return this.countryService.getCountries(params.query, 'capital')
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
