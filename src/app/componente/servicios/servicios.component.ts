import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = []; // Define la propiedad `servicios`

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener los datos
    this.servicios = this.serviciosService.obtenerServicios();
  }
}
