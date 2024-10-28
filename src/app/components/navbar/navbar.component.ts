import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, InputTextModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  value: string | undefined;

}
