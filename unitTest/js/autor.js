
/*implentacion de la clase Autor con getters y setters*/
class Autor {
    
    constructor() {
        var sThis = this;
        this.datosAutor = {
            nombreCompleto: '',
            fechaNacimiento: '',
            nacionalidad: ''
        };
        //getters
        var getNombreCompleto = function () {
            return sThis.datosAutor.nombreCompleto;
        };
        var getFechaNacimiento = function () {
            return sThis.datosAutor.fechaNacimiento;
        };
        var getNacionalidad = function () {
            return sThis.datosAutor.nacionalidad;
        };
        //setters
        var setNombreCompleto = function (nombreCompleto) {
            sThis.datosAutor.nombreCompleto = nombreCompleto;
        };
        var setFechaNacimiento = function (fechaNacimiento) {
            sThis.datosAutor.fechaNacimiento = fechaNacimiento;
        };
        var setNacionalidad = function (nacionalidad) {
            sThis.datosAutor.nacionalidad = nacionalidad;
        };
        return {
            getNombreCompleto: getNombreCompleto,
            getFechaNacimiento: getFechaNacimiento,
            getNacionalidad: getNacionalidad,
            setNombreCompleto: setNombreCompleto,
            setFechaNacimiento: setFechaNacimiento,
            setNacionalidad: setNacionalidad,
        };
    }
}
