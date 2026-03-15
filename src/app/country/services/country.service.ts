import { Region, regions } from './../interfaces/region-options.type';
import { ICountry } from './../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICountryResponse } from '../interfaces/country-response.interface';
import { catchError, map, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../helpers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private countryMapper = inject(CountryMapper);

  private queryCachePerCapital = new Map<string, ICountry[]>();
  private queryCachePerName = new Map<string, ICountry[]>();
  private queryCachePerRegion = new Map<string, ICountry[]>();

  capitalCountries = signal('');

  getCountries(query: string, option: 'name' | 'capital' | 'alpha' | 'region') {
    const lowerQuery = query.toLocaleLowerCase();

    if (option === 'capital' && this.queryCachePerCapital.has(lowerQuery)) {
      return of(this.queryCachePerCapital.get(lowerQuery));
    }

    if (option === 'name' && this.queryCachePerName.has(lowerQuery)) {
      return of(this.queryCachePerName.get(lowerQuery));
    }

    if(option === 'region' && !regions.includes(query as Region)) {
      return of([]);
    }

    if (option === 'region' && this.queryCachePerRegion.has(lowerQuery)) {
      return of(this.queryCachePerRegion.get(lowerQuery));
    }

    return this.http
      .get<ICountryResponse[]>(`https://restcountries.com/v3.1/${option}/${lowerQuery}`)
      .pipe(
        map((c) => {
          return this.countryMapper.mapCountries(c);
        }),
        tap((data) => {
          if (option === 'capital') {
            this.queryCachePerCapital.set(lowerQuery, data);
          }
          if (option === 'name') {
            this.queryCachePerName.set(lowerQuery, data);
          }
          if (option === 'region') {
            this.queryCachePerRegion.set(lowerQuery, data);
          }
        }),
        catchError(() => {
          return throwError(() => new Error('Failed to fetch countries'));
        }),
      );
  }
}
