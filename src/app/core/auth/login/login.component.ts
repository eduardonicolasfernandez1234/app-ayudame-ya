import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string = '';
  pass: string = '';

  constructor(
    private usuarioService: UsuarioService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  iniciar(){
    if(this.usuario.length > 0 && this.pass.length > 0){
      let data = {
        username: this.usuario,
        password: this.pass
      }
      this.usuarioService.obtenerUsuarioPorAuth(data).subscribe((usuario) => {
        if(usuario.res){
          console.log('ERROR CREDENCIALES INVALIDAS');
          this.snackBar.open('ERROR CREDENCIALES INVALIDAS', 'Aceptar');
          setTimeout(() => {
            this.snackBar.dismiss();
          }, 3000);
        }else{
          console.log('Authenticacion exitosa');
          console.log(usuario);
          this.usuarioService.guardarUsuarioStorage(usuario);
          this.snackBar.open('INICIO DE SESIÓN CORRECTAMENTE!!!', 'Aceptar');
          setTimeout(() => {
            this.snackBar.dismiss();
          }, 3000);
        }
      }, error => {
        console.log(error);
      })
    }
  }

  registrarse(){

  }

}
