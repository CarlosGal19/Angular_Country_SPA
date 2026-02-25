import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ICountryResponse } from '../interfaces/country-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  capitalCountries = signal('');

  getCountriesByCapital(capitalQuery: string) {
    const lowerQuery = capitalQuery.toLocaleLowerCase();

    return this.http.get<ICountryResponse[]>(`https://restcountries.com/v3.1/capital/${lowerQuery}`)
  }
}
