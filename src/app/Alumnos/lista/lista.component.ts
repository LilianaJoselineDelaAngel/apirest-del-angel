import { Component, ViewChild, Inject } from '@angular/core';
import { Alumnos } from '../../models/alumnos';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AlumnoListaService } from '../../services/alumno-lista.service';
import { FormularioComponent } from '../../Alumnos/formulario/formulario.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent {
  Alumnos!: Alumnos;
  Alumnos$!: Observable<Alumnos[]>;
  // suscripcion!: Subscription;
  //dataSource!: MatTableDataSource<Alumnos>;
  constructor(
    private AlumnoListaService: AlumnoListaService,
    public dialog: MatDialog // public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.Alumnos$ = this.AlumnoListaService.obtenerAlumnosObservable();

    //this.dataSource = new MatTableDataSource<Alumnos>();
    //this.AlumnoListaService.obtenerAlumnosObservable().subscribe(
    //  (Alumnos: Alumnos[]) => {
    //    this.dataSource.data = Alumnos;
    //  }
    // );
  }
  //@ViewChild(MatTable) tabla!: MatTable<Alumnos>;
  // ngOnDestroy(): void {
  //   this.suscripcion.unsubscribe();
  // }
  //seleccionado = null;
  editarAlumno(alumn: any) {
    console.log('lista comp', alumn);
    const dialogRef = this.dialog.open(FormularioComponent, {
      data: alumn,
    });
  }

  eliminarAlumno(alumn: any) {
    this.AlumnoListaService.eliminar(alumn);
  }
}
