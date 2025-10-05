import { Component } from '@angular/core';
import { Dashboard } from "./components/dashboard/dashboard";

@Component({
    selector: 'app-root',
    imports: [Dashboard],
    templateUrl: './app.component.html',
    styleUrl: '../styles.scss'
})
export class AppComponent {
  title = 'header';
}
