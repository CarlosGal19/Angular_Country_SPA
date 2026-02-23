import { Routes } from "@angular/router";
import { CapitalPage } from "./pages/capital-page/capital-page";
import { CountryLayout } from "./layouts/country-layout/country-layout";

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'capital',
        component: CapitalPage
      }
    ]
  }
]

export default countryRoutes;
