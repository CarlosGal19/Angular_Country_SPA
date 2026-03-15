import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../../shared/components/country-search-input/country-search-input";
import { CountryService } from '../../services/country.service';
import { CountrySearchTable } from '../../components/country-search-table/country-search-table';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './country-page.html',
})
export class CountryPage {
  countryService = inject(CountryService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? ''

  query = signal(this.queryParam);

  countryNameResource = rxResource({
    params: () => ({
      name: this.query()
    }),
    stream: ({params}) => {
      if (params.name == '') return of([]);
      this.router.navigate(['/country/country'], {
        queryParams: {
          query: params.name
        }
      })

      return this.countryService.getCountries(params.name, 'name');
    }
  })
}
