import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-layout-base',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent],
  templateUrl: './layout-base.component.html'
})
export class LayoutBaseComponent {

  @Input() title: string | undefined;

}
