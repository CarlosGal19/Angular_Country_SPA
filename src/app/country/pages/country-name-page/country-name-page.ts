import { CountryService } from './../../services/country.service';
import { Component, effect, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map, of } from 'rxjs';
import { NotFoundComponent } from "../../../shared/pages/not-found/not-found";
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'country-name-page',
  imports: [NotFoundComponent, CountryInformation],
  templateUrl: './country-name-page.html',
})
export class CountryNamePage {

  countryService = inject(CountryService);

  queryParams = signal<Record<string, string>>({})

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['country']),
    )
  )

  countryResource = rxResource({
    params: () => ({
      query: this.query()
    }),
    stream: ({ params }) => {
      if (params.query == '') return of([]);

      return this.countryService.getCountries(params.query, 'alpha')
    }
  })
}
