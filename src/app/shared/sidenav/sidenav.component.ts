import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
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
  }

}
