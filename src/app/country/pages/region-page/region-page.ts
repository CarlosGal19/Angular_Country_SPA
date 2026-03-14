import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../../shared/components/country-search-input/country-search-input";
import { CountrySearchTable } from "../../components/country-search-table/country-search-table";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-region-page',
  imports: [CountrySearchInput, CountrySearchTable],
  templateUrl: './region-page.html',
})
export class RegionPage {

  countryService = inject(CountryService);

  query = signal('');

  countryRegionResource = rxResource({
    params: () => ({
      region: this.query()
    }),
    stream: ({params}) => {
      if(params.region == '') return of([]);

      return this.countryService.getCountries(params.region, 'region');
    }
  })

}
