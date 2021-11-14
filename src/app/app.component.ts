import { Component } from '@angular/core';
import { UsuarioService } from './core/services/usuario/usuario.service';
import { Usuario } from './shared/models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-ayudame-ya';

  constructor(private usuarioService: UsuarioService){

  }

  ngOnInit(){
    let usuario: Usuario = this.usuarioService.obtenerUsuario();
    this.usuarioService.obtenerUsuarioPorId(usuario.id).subscribe((usuario) => {
      this.usuarioService.guardarUsuarioStorage(usuario as Usuario);
    }, error => {
      console.log(error);
    })
  }
}
