import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {
  constructor() {}

  obtenerTecnicos() {
    return [
      {
        nombre: 'Juan Pérez',
        especialidad: 'Reparación de computadoras',
        experiencia: '5 años',
        imagen: 'assets/img/tecnicos/juanperez.avif'
      },
      {
        nombre: 'María López',
        especialidad: 'Instalación de software de oficina',
        experiencia: '3 años',
        imagen: 'assets/img/tecnicos/marialopez.jpg'
      },
      {
        nombre: 'Carlos Díaz',
        especialidad: 'Instalación de sistemas operativos',
        experiencia: '7 años',
        imagen: 'assets/img/tecnicos/carlosdiaz.jpg'
      }
    ];
  }
}
