import { Component, AfterViewInit,ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const hostElement = this.el.nativeElement as HTMLElement;

    // Menú hamburguesa móvil
    const mobileMenuButton = hostElement.querySelector<HTMLButtonElement>('.mobile-menu-button');
    const mobileMenu = hostElement.querySelector<HTMLElement>('.navigation-menu-mobile');

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }

}
