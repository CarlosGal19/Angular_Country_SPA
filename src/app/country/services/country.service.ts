import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICountryResponse } from '../interfaces/country-response.interface';
import { map, tap } from 'rxjs';
import { CountryMapper } from '../helpers/country.mapper';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private countryMapper = inject(CountryMapper)

  capitalCountries = signal('');

  getCountriesByCapital(capitalQuery: string) {
    const lowerQuery = capitalQuery.toLocaleLowerCase();

    return this.http.get<ICountryResponse[]>(`https://restcountries.com/v3.1/capital/${lowerQuery}`).pipe(
      map(c => {
        return this.countryMapper.mapCountries(c);
      })
    )
  }
}
