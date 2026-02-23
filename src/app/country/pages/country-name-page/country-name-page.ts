import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'country-name-page',
  imports: [],
  templateUrl: './country-name-page.html',
})
export class CountryNamePage {
  queryParams = signal<Record<string, string>>({})
  country = signal('');

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['country']),
      tap((param) => this.country.set(param)),
    )
  )
}
