export class Location {
  lat: number;
  lng: number;
  fecha: string;

  constructor(lat: number, lng: number, fecha: string) {
    this.lat = lat;
    this.lng = lng;
    this.fecha = fecha;
  }
}
