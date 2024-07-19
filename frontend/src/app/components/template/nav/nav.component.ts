import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import {MatSidenavModule }from '@angular/material/sidenav';
import{ MatListModule}from'@angular/material/list';
import { HomeComponent } from "../../../views/home/home.component";
import { AlunosComponent } from "../../../views/alunos/alunos.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatToolbar,
    MatSidenavModule,
    MatListModule,
    HomeComponent,
    AlunosComponent,
    RouterOutlet
],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
