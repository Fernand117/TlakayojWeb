import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModelModule } from 'src/app/models/usuario-model/usuario-model.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuariosModel: UsuarioModelModule = new UsuarioModelModule();

  constructor() { }

  ngOnInit(): void {
  }

  validarFormulario(form: NgForm) {
    if (this.usuariosModel.usuario === "") {
      this.mensaje("Ingrese su nombre de usuario");
      form.resetForm();
    }

    if (this.usuariosModel.password === "") {
      this.mensaje("Ingrese su contraseña.");
      form.resetForm();
    }
  }

  mensaje(mensaje: string) {
    Swal.fire({
      title: "Advertencia",
      text: mensaje,
      icon: 'info'
    });
  }

}
