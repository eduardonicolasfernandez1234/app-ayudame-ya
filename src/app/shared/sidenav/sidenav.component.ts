import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  fillerNav = [
    {name:"Home", route:"", icon:"home"},
    {name:"Juegos", route:"juegos", icon:"sports_esports"},
    {name:"Logros", route:"logros", icon:"stars"},
    {name:"Premios", route:"premios", icon:"emoji_events"},
    {name:"Canjeo", route:"canjeo", icon:"sync"},
    {name:"Perfil", route:"perfil", icon:"face"},
    {name:"Registro", route:"registro", icon:"account_box"},
    {name:"Login", route:"login", icon:"badge"},
    {name:"Contacto", route:"", icon:"perm_contact_calendar"},
  ]

  usuario!: Usuario;
  storedTheme!: string;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private usuarioService: UsuarioService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  // shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  shouldRun = true;

  ngOnInit(): void {
    this.storedTheme = localStorage.getItem('theme-color')!;
    this.usuario = this.usuarioService.obtenerUsuario();
  }

  setTheme(theme: any){
    localStorage.setItem('theme-color', theme);
    this.storedTheme = localStorage.getItem('theme-color')!;
  }

}
