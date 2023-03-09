import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { Sesion } from '../../models/sesion';
import { SesionService } from '../services/sesion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {
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
        if (sesion.sesionActiva) {
          return true;
        } else {
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.Sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        if (sesion.sesionActiva) {
          return true;
        } else {
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.Sesion.obtenerSesion().pipe(
      map((sesion: Sesion) => {
        if (sesion.sesionActiva) {
          return true;
        } else {
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
  }
}