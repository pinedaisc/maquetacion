/* Implementacion de la clase Libro con getters y setters */
var Libro = function(){

    var sThis = this;

sThis.datosLibro = {
    titulo : '',
    editorial : '',
    autor : '',
    fechaPrimeraImpresion : '',
    isbn : ''
};

var getTitulo = function (){
    return sThis.datosLibro.titulo;
}
var getEditorial = function(){
    return sThis.datosLibro.editorial;
}
var getAutor = function () {  
    return sThis.datosLibro.autor;
} 
var getFechaPrimeraImpresion = function () {
    return sThis.datosLibro.fechaPrimeraImpresion;
}
var getIsbn = function(){
    return sThis.datosLibro.isbn;
}

var setTitulo = function (titulo){
    sThis.datosLibro.titulo = titulo;
}
var setEditorial = function(editorial){
    sThis.datosLibro.editorial =editorial;
}
var setAutor = function (autor) {  
    sThis.datosLibro.autor =autor;
} 
var setFechaPrimeraImpresion = function (fechaPrimeraImpresion) {
    sThis.datosLibro.fechaPrimeraImpresion =fechaPrimeraImpresion;
}
var setIsbn = function(isbn){
    sThis.datosLibro.isbn =isbn;
}

return{
    getTitulo : getTitulo,
    getEditorial : getEditorial,
    getAutor : getAutor,
    getFechaPrimeraImpresion : getFechaPrimeraImpresion,
    getIsbn : getIsbn,
    setTitulo : setTitulo,
    setEditorial : setEditorial,
    setAutor : setAutor,
    setFechaPrimeraImpresion : setFechaPrimeraImpresion,
    setIsbn : setIsbn,

}

}