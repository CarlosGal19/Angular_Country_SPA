import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'countries-navigation',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './countries-navigation.html',
})
export class CountriesNavigation {

}
