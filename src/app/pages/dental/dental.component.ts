import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicioDental, ServiciosDentalesService } from '../../services/servicios-dentales.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dental',
  imports: [CommonModule],
  templateUrl: './dental.component.html',
  styleUrl: './dental.component.css'
})
export class DentalComponent {
  serviciosDentales: ServicioDental[] = [];

  constructor(
    private serviciosService: ServiciosDentalesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarServicios(); // primera carga

    // Vuelve a cargar cada vez que se completa una navegación
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.cargarServicios();
      });
  }

  cargarServicios(): void {
    this.serviciosService.getServicios().subscribe((data) => {
      this.serviciosDentales = data;
    });
  }
}
