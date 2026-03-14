import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICountryResponse } from '../interfaces/country-response.interface';
import { catchError, map, tap, throwError } from 'rxjs';
import { CountryMapper } from '../helpers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private countryMapper = inject(CountryMapper)

  capitalCountries = signal('');

  getCountries(query: string, option: 'name' | 'capital' | 'alpha' | 'region' ) {
    const lowerQuery = query.toLocaleLowerCase()

    return this.http.get<ICountryResponse[]>(`https://restcountries.com/v3.1/${option}/${lowerQuery}`).
      pipe(
        map(c => {
          return this.countryMapper.mapCountries(c)
        }),
        catchError(() => {
          return throwError(() => new Error('Failed to fetch countries'))
        })
      )
  }
}
