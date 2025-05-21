import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-respuesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-respuesta.component.html',
  styleUrl: './modal-respuesta.component.css'
})
export class ModalRespuestaComponent {
  @Input() visible = false;
  @Input() mensaje = '';
  @Input() onClose!: () => void;
}
