import { MatToolbarModule } from '@angular/material/toolbar';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-header',
  imports:[CommonModule, MatToolbarModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Qualquer lógica adicional pode ser adicionada aqui
}
