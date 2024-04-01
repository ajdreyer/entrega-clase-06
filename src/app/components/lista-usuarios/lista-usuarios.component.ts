import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Usuario } from '../../models';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.scss'
})
export class ListaUsuariosComponent {
  @ViewChild('myList')
  myList?: ElementRef;
  
  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter();
  
  @Output()
  createUser = new EventEmitter();

  @Input()
  usuarios: Usuario[] = [];
}
