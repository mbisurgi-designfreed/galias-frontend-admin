import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-filtros-vendedores',
  templateUrl: './filtros-vendedores.component.html',
  styleUrls: ['./filtros-vendedores.component.css']
})
export class FiltrosVendedoresComponent implements OnInit {
  form: FormGroup;

  filtros = ['Todos', 'Seleccionar'];
  usuarios = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'filtros': new FormControl(this.filtros[0]),
      'vendedores': new FormArray([])
    });

    this.usuarios = this.userService.getUsersByTipo('vendedor');
  }

  selectedFiltro() {
    if (this.form.get('filtros').value === 'Todos') {
      return false;
    }

    if (this.form.get('filtros').value === 'Seleccionar') {
      return true;
    }
  }

  disabledBtn() {
    if (this.form.get('filtros').value === 'Todos') {
      return true;
    }

    if (this.form.get('filtros').value === 'Seleccionar' && (<FormArray>this.form.get('vendedores')).length === 0) {
      return false;
    }

    if (this.form.get('filtros').value === 'Seleccionar' && (<FormArray>this.form.get('vendedores')).length > 0) {
      return true;
    }
  }

  onSubmit() {
    if (this.form.get('filtros').value === 'Todos') {

    }

    if (this.form.get('filtros').value === 'Seleccionar') {

    }
  }

  onAddFiltro() {
    const control = new FormControl(null);

    (<FormArray>this.form.get('vendedores')).push(control);
  }

  onRemoveFiltro(i: number) {
    (<FormArray>this.form.get('vendedores')).removeAt(i);
  }
}
