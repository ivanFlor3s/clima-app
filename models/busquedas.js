class Busquedas{
    historial = ['Argentina', 'Tegucigalpa', 'Madrid']

    constructor(){
        //TODO: leer DB si existe
    }

    async ciudad( lugar = ''){
        //Realizar HTTP Request
        console.log(lugar)

        return [] // retornar las ciudades que conincidan con el input
    }
}

module.exports = Busquedas