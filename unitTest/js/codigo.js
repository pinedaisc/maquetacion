

QUnit.test("TESTTT", function(assert){
    var autor = new Autor();
    autor.setNombreCompleto('Ismael López Quintero');
    autor.setFechaNacimiento('04/07/1983');
    autor.setNacionalidad('Española');

    var libro = new Libro();

    libro.setTitulo('aprendiendo notacion JSON');
    libro.setEditorial('Anagrama');
    libro.setAutor(autor);
    libro.setFechaPrimeraImpresion('01/01/2019');
    libro.setIsbn('123456789');

    var tituloLibro = libro.getTitulo();

    assert.equal(tituloLibro, 'aprendiendo notacion JSON', 'Titulo de libro correcto.');
});

