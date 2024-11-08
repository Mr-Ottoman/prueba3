// formulario.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: string = '';
  mensaje: string = '';
  mensajeEnviado: boolean = false;

  nombreEnviado: string = '';
  apellidoEnviado: string = '';

  enviarFormulario() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellido: ${this.apellido}`);
    console.log(`Correo: ${this.correo}`);
    console.log(`Teléfono: ${this.telefono}`);
    console.log(`Mensaje: ${this.mensaje}`);
    
    // Guardar los datos ingresados para el mensaje de confirmación
    this.nombreEnviado = this.nombre;
    this.apellidoEnviado = this.apellido;
    this.mensajeEnviado = true;

    // Limpiar los campos del formulario
    this.nombre = '';
    this.apellido = '';
    this.correo = '';
    this.telefono = '';
    this.mensaje = '';
  }
}
