import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, PanelModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
}
