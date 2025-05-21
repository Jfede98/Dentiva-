import { Component } from '@angular/core';
import { FormContacto, ContactoService } from '../../services/contacto.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ModalRespuestaComponent } from '../modal-respuesta/modal-respuesta.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, ModalRespuestaComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  datos: FormContacto = {
    nombre: '',
    correo: '',
    telefono: '',
    tipoConsulta: '',
    asunto: ''
  };
constructor(private contactoService: ContactoService) {}

modalVisible = false;
mensajeModal = '';
errores: { [key: string]: string } = {};

validarTelefono(valor: string): boolean {
  return /^[0-9]{8,15}$/.test(valor);
}

validarCorreo(valor: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
}

enviarFormulario() {
  this.errores = {}; // Resetear errores

  const { nombre, correo, telefono, tipoConsulta, asunto } = this.datos;

  if (!nombre) this.errores['nombre'] = 'El nombre es obligatorio.';
  if (!correo) this.errores['correo'] = 'El correo es obligatorio.';
  else if (!this.validarCorreo(correo)) this.errores['correo'] = 'El correo no es válido.';

  if (!telefono) this.errores['telefono'] = 'El teléfono es obligatorio.';
  else if (!this.validarTelefono(telefono)) this.errores['telefono'] = 'El teléfono debe tener solo números.';

  if (!tipoConsulta) this.errores['tipoConsulta'] = 'Debe seleccionar un tipo de consulta.';
  if (!asunto) this.errores['asunto'] = 'El asunto es obligatorio.';

  if (Object.keys(this.errores).length > 0) return;

  this.contactoService.enviarMensaje(this.datos).subscribe({
    next: () => {
      this.mensajeModal =
        `Hola ${nombre},\n\n` +
        `Recibimos su solicitud sobre "${asunto}". El motivo de nuestro contacto es ayudarle a encontrar una hora de atención con nuestros especialistas.\n\n` +
        `Por favor contáctenos a nuestro número de recepción: +56 9 9993 5071\n\n` +
        `Esperamos que tenga un buen día. Quedamos atentos a su respuesta.\n\n` +
        `Saludos cordiales.`;

      this.modalVisible = true;
      this.datos = { nombre: '', correo: '', telefono: '', tipoConsulta: '', asunto: '' };
    },
    error: () => {
      alert('Ocurrió un error al enviar el mensaje. Por favor, inténtelo más tarde.');
    }
  });
}

cerrarModal() {
  this.modalVisible = false;
}

}
