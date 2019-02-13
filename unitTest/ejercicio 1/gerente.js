class Gerente{
    constructor(){
        nombreCompleto : '';
        NumeroDocumento : '';
        telefono : '';
    }

    getNombreCompleto = function(){return this.nombreCompleto}
    getNumeroDocumento = function(){return this.NumeroDocumento}
    getTelefono = function(){return this.telefono}

    setNombreCompleto = function(nombreCompleto){ this.nombreCompleto = nombreCompleto}
    setNumeroDocumento = function(numeroDocumento){ this.NumeroDocumento = numeroDocumento}
    setTelefono = function(telefono){ this.telefono= telefono}

    


}