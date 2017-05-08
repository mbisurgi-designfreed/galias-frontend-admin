export class User {
  id: string;
  nombre: string;
  apellido: string;

  constructor(id: string, nombre: string, apellido: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
