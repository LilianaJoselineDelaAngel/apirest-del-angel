import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';
import { Sesion } from '../../models/sesion';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private Sesion: SesionService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.Sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        if (sesion.usuarioActivo?.esAdmin) {
          return true;
        } else {
          alert('El usuario no tiene permisos de administrador');
          this.router.navigate(['inicio']);
          return false;
        }
      })
    );
  }
}
