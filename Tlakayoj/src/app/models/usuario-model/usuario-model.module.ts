import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModelModule {
  public id: number;
  public usuario: string;
  public password: string;

  constructor() {
    this.id = 0;
    this.usuario = "";
    this.password = "";
  }
}
