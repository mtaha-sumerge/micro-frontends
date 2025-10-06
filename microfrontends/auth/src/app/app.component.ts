import { Component } from '@angular/core';
import { Auth } from "./auth/auth";

@Component({
    selector: 'app-auth-root',
    imports: [Auth],
    templateUrl: './app.component.html',
    styleUrl: '../styles.scss'
})
export class AppComponent {
  title = 'header';
}
