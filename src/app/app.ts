import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalFooter } from "./shared/components/global-footer/global-footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GlobalFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Country_SPA');
}
