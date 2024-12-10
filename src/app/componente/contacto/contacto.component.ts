import { Component, OnInit } from '@angular/core';
import { TecnicosService } from '../../services/tecnicos.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  tecnicos: any[] = []; // Declaración de la propiedad 'tecnicos'

  constructor(private tecnicosService: TecnicosService) {}

  ngOnInit(): void {
    // Llamada al servicio para obtener los técnicos
    this.tecnicos = this.tecnicosService.obtenerTecnicos();
  }
}
