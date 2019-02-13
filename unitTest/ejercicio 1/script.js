QUnit.test("Test datos del Hotel", function(assert){
    var hotel = new Hotel();
    var gerente = new Gerente();
    var habitacion = new Habitacion();


    hotel.setNombre("Kron");
    hotel.setCiudad('cdmx');
    hotel.setDireccion('insurgentes sur 3456');
    hotel.setTelefono('5546344452');
    hotel.setSitioWeb('https://hotelkron.com')
    hotel.setGerente(gerente);
    hotel.setHabitaciones('20')

    gerente.setNombreCompleto('Fabricio Uriel Calo Kuri')
    gerente.setNumeroDocumento('23527645637842')
    gerente.setTelefono('2345523523')

    habitacion.setPlanta('3')
    habitacion.setNumeroCamas('1')
    habitacion.setTelefono('75534')

    assert.equal(hotel.getNombre(), "Kron", "Nombre de Hotel correcto")
    assert.equal(hotel.getCiudad(), 'cdmx', 'ciudad correcto')
    assert.equal(hotel.getDireccion(),'insurgentes sur 3456', 'direccion del hotal correcta')
    assert.equal(hotel.getGerente(),gerente, 'gerente del hotel correcto')

    assert.equal(gerente.getNombreCompleto(),'Fabricio Uriel Calo Kuri', 'nombre de gerente correcto')
    assert.equal(gerente.getNumeroDocumento(),'23527645637842', 'documento gerente correcto')
    assert.equal(gerente.getTelefono(), '2345523523', 'telefono de gerente completo')
    assert.equal(habitacion.getPlanta(),'3','planta de habitacion correcta')
    assert.equal(habitacion.getNumeroCamas(),'1', 'numero de camas de habitacion correcto')
    assert.equal(habitacion.getTelefono(),'75534','telefono de la habitacion correcto')

})