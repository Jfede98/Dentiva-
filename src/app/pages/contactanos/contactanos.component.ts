import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  especialistas = [
    {
      nombre: 'Dr. Roberto Chavez',
      especialidad: 'Ortodoncista',
      imagen: './drchavez.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      nombre: 'Dra. Lisseth Yepez',
      especialidad: 'Endodoncista',
      imagen: './drayepez.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    },
    {
      nombre: 'Dra. Liset Salas',
      especialidad: 'Ortodoncista',
      imagen: './drasalas.png',
      link: 'https://8ae8c9cefc8bfd0f423f19afb00c802f2ae29dbd.agenda.softwaredentalink.com/agenda?modalidad=1'
    }
  ];

  cards = [
    {
      icono: './ws-dorado.svg',
      titulo: 'WhatsApp',
      descripcion: 'Contáctanos a núestro número vía WhatsApp y recibe comunicación instantánea.',
      texto: '+56 9 9993 5071',
      link: 'https://api.whatsapp.com/send?phone=56999935071&text=Hola%2C%20vengo%20de%20su%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20agendar%20una%20cita.'
    },
    {
      icono: './mail-dorado.svg',
      titulo: 'Escríbenos',
      descripcion: 'No dudes en contactarnos vía mail para responder todas tus dudas.',
      texto: 'dentiva.recepcion@gmail.com',
      link: 'mailto:dentiva.recepcion@gmail.com'
    },
    {
      icono: './visit-dorado.svg',
      titulo: 'Visítanos',
      descripcion: 'Nuestra clínica se encuentra a pasos del metro Manuel Mont',
      texto: 'Dr Manuel Barros Borgoño 160, Oficina 607',
      link: 'https://maps.app.goo.gl/WXCQEmR3R88HTSv88'
    },
    {
      icono: './form-dorado.svg',
      titulo: 'Déjanos tus datos',
      descripcion: 'Llena el formulario para ponerte en contacto con nosotros.',
      texto: 'Formulario al pie de página',
      link: '#footer'
    }
  ];

/*Scroll */
scrollToFooter() {
  const footer = document.getElementById('footer');
  if (footer) {
    footer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

}
