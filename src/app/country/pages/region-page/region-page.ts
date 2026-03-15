import { rxResource } from '@angular/core/rxjs-interop';
import { Component, inject, signal } from '@angular/core';
import { CountrySearchInput } from "../../../shared/components/country-search-input/country-search-input";
import { CountrySearchTable } from "../../components/country-search-table/country-search-table";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { RegionCountrySearcher } from "../../components/region-country-searcher/region-country-searcher";

@Component({
  selector: 'app-region-page',
  imports: [CountrySearchTable, RegionCountrySearcher],
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
