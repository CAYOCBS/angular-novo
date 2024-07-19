import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from "./components/template/header/header.component";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NavComponent],
  standalone: true,
  
  templateUrl: './app.component.html', // Referencie o arquivo HTML
  styles: [],
})
export class AppComponent {
  nome = 'Maria';
}
