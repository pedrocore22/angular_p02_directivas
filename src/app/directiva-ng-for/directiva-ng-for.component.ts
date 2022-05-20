import { Component, OnInit } from '@angular/core';
import { Proveedor } from '../models/proveedor.model';

@Component({
  selector: 'app-directiva-ng-for',
  templateUrl: './directiva-ng-for.component.html',
  styleUrls: ['./directiva-ng-for.component.css']
})
export class DirectivaNgForComponent implements OnInit {

  proveedores: Array<Proveedor> = [
    {nombre: 'Telefónica', cif: 'A15762572', localidad: 'Madrid'},
    {nombre: 'Orange', cif: 'A1576571', localidad: 'Valencia'},
    {nombre: 'Lowi', cif: 'A27652751', localidad: 'Sevilla'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
