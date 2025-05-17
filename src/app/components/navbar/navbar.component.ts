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

    
    // const dropdownToggles = hostElement.querySelectorAll<HTMLButtonElement>('.dropdown-toggle');
    // const dropdownMenus = hostElement.querySelectorAll<HTMLElement>('.dropdown-menu');

    // dropdownToggles.forEach(toggle => {
    //   toggle.addEventListener('click', (event) => {
    //     event.stopPropagation(); 

    //     const dropdownMenu = toggle.nextElementSibling as HTMLElement;

    //     if (dropdownMenu.classList.contains('hidden')) {
    //       dropdownMenus.forEach(menu => menu.classList.add('hidden')); 
    //       dropdownMenu.classList.remove('hidden');
    //     } else {
    //       dropdownMenu.classList.add('hidden');
    //     }
    //   });
    // });


    // if (typeof window !== 'undefined') {
    //   window.addEventListener('click', (e: Event) => {
    //     const target = e.target as HTMLElement;
    //     if (!target.closest('.dropdown-toggle')) {
    //       dropdownMenus.forEach(menu => {
    //         if (!menu.contains(target)) {
    //           menu.classList.add('hidden');
    //         }
    //       });
    //     }
    //   });
    // }

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
