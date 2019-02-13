class Habitacion {
    constructor (){
        planta : '';
        numeroCamas : '';
        telefono : '';
    }

    getPlanta = function(){return this.planta;}
    getNumeroCamas = function(){return this.numeroCamas}
    getTelefono = function(){return this.telefono}

    setPlanta = function(planta){ this.planta= planta;}
    setNumeroCamas = function(numeroCamas){ this.numeroCamas= numeroCamas}
    setTelefono = function(telefono){ this.telefono= telefono}
}