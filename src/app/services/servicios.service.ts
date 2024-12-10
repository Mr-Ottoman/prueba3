import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private servicios = [
    {
      id: 1,
      nombre: 'Instalación de Sistemas Operativos',
      descripcion: 'Instalamos sistemas operativos como Windows, Linux, y macOS en sus dispositivos.',
      precio: '20.000 + IVA',
      imagen: 'assets/img/nuestros_servicios/instalacionOS.jpg'
    },
    {
      id: 2,
      nombre: 'Reparación de Computadoras',
      descripcion: 'Diagnóstico y reparación de hardware y software.',
      precio: '15.000 + IVA',
      imagen: 'assets/img/nuestros_servicios/reparacionPC.jpg'
    },
    {
      id: 3,
      nombre: 'Instalación de Software de Oficina',
      descripcion: 'Instalación y configuración de software como Microsoft Office y herramientas similares.',
      precio: '10.000 + IVA',
      imagen: 'assets/img/nuestros_servicios/instalacionSoficina.jpg'
    },
    {
      id: 4,
      nombre: 'Instalación Windows 10 PRO',
      descripcion: 'Instalación del sistema operativo Windows 10 PRO con licencia.',
      precio: '15.000 + IVA',
      imagen: 'assets/img/nuestros_servicios/windows10pro.avif'
    }
  ];

  obtenerServicios() {
    return this.servicios;
  }
}
