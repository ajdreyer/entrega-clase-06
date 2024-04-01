import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Usuario } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ageUserValidation } from '../../utils/validators';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrl: './form-usuario.component.scss'
})
export class FormUsuarioComponent{

  userForm = this.formBuilder.group({
    firstName: this.formBuilder.control('', Validators.required),
    lastName: this.formBuilder.control('', Validators.required),
    email: this.formBuilder.control('', [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    age: this.formBuilder.control('', [Validators.required, ageUserValidation]),
    address: this.formBuilder.control('', Validators.required)
  });

  constructor(private formBuilder: FormBuilder){
    
  }

  @ViewChild('formUsuario')
  formUsuario?: ElementRef;

  @Input()
  visible = false;

  @Output()
  visibleChange = new EventEmitter();

  @Output()
  newItemEvent = new EventEmitter<Usuario>();

  onSubmit(userData: FormGroup) {
    if(this.userForm.valid){
      let firstName = this.userForm.controls.firstName.value || '';
      let lastName = this.userForm.controls.lastName.value || '';
      let email = this.userForm.controls.email.value || '';
      let age: number = +(this.userForm.controls.age.value || 0);
      let address = this.userForm.controls.address.value || '';

      let user = new Usuario(firstName, lastName, age, email, address);
    
      this.userForm.reset();

      this.newItemEvent.emit(user);

      Swal.fire({
        icon: 'success',
        title: 'Realizado',
        text: 'Usuario registrado',
      });
    }
    else
    {
      this.userForm.markAllAsTouched();

      Swal.fire({
        title: "Error",
        icon: "error"
      })
    }

  }

  get firstNameControl(){
    return this.userForm.get('firstName');
  }

  get lastNameControl(){
    return this.userForm.get('lastName');
  }

  get emailControl(){
    return this.userForm.get('email');
  }

  get ageControl(){
    return this.userForm.get('age');
  }

  get addressControl(){
    return this.userForm.get('address');
  }
}