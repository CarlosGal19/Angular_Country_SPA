import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearchInput } from "../../../shared/components/country-search-input/country-search-input";
import { CountryService } from '../../services/country.service';
import { CountrySearchTable } from '../../components/country-search-table/country-search-table';
import { ICountry } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'country-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryService = inject(CountryService);

  query = signal('');

  countryNameResource = rxResource({
    params: () => ({
      name: this.query()
    }),
    stream: ({params}) => {
      if (params.name == '') return of([]);

      return this.countryService.getCountriesByName(params.name);
    }
  })
}
