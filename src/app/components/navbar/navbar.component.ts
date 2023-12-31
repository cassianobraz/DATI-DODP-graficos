import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarCollapsed: boolean = true;

  toggleNavbarCollapsing(): void {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
