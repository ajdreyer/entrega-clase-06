import { Component } from '@angular/core';
import { Usuario } from './models';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'entrega-clase-06';

  formUsuarioVisible = false;

  listaUsuariosVisible = false;

  createUser():void{
    this.listaUsuariosVisible = false;
    this.formUsuarioVisible = true;
  }

  listarUsuarios(): void{
    this.listaUsuariosVisible = true;
    this.formUsuarioVisible = false;
  }

  usuarios: Usuario[] = [
    {
      firstName: "Alejandro",
      lastName: "Dreyer",
      address: 'alsina 2356',
      age: 33,
      email: "email@email.com"
    }
  ]

  userToPush = null;

  saveUser(user: Usuario):void{
    this.usuarios.push(user);

    this.listarUsuarios();
  }
}
