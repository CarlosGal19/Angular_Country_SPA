import { Routes } from "@angular/router";
import { CapitalPage } from "./pages/capital-page/capital-page";
import { CountryLayout } from "./layouts/country-layout/country-layout";
import { CountryPage } from './pages/country-page/country-page';
import { RegionPage } from './pages/region-page/region-page';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'capital',
        component: CapitalPage
      },
      {
        path: 'country',
        component: CountryPage,
      },
      {
        path: 'region',
        component: RegionPage,
      },
    ]
  }
]

export default countryRoutes;
