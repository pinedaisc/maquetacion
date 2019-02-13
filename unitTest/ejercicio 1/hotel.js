class Hotel {

    constructor() {
        nombre: '';
        ciudad: '';
        direccion: '';
        telefono: '';
        sitioWeb: '';
        gerente: '';
        habitaciones: '';
    }

    getNombre = function () { return this.nombre; }
    getCiudad = function () {return this.ciudad;}
    getDireccion = function () { return this.direccion; }
    getTelefono = function () { return this.telefono; }
    getSitioWeb = function () { return this.sitioWeb; }
    getGerente = function () { return this.gerente; }
    getHabitaciones = function () { return this.habitaciones }

    setNombre = function (nombre) {this.nombre = nombre;}
    setCiudad = function(ciudad){ this.ciudad = ciudad;}
    setDireccion = function (direccion) {  this.direccion = direccion; }
    setTelefono = function (telefono) {  this.telefono = telefono; }
    setSitioWeb = function (sitioWeb) {  this.sitioWeb = sitioWeb; }
    setGerente = function (gerente) {  this.gerente = gerente; }
    setHabitaciones = function (habitaciones) {  this.habitaciones = habitaciones }

}