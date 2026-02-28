import { Injectable } from "@angular/core";
import { ICountryResponse } from "../interfaces/country-response.interface";
import { ICountry } from "../interfaces/country.interface";
import { CountryService } from "../services/country.service";

@Injectable({
  providedIn: 'root'
})
export class CountryMapper {

  mapCountry(country: ICountryResponse): ICountry {
    return {
      flag: country.flag,
      flags: {
        svg: country.flags.svg
      },
      cca2: country.cca2,
      name: {
        official: country.name.official
      },
      capital: country.capital[0],
      population: country.population
    }
  }

  mapCountries(countries: ICountryResponse[]): ICountry[] {
    return countries.map(c => this.mapCountry(c))
  }
}
