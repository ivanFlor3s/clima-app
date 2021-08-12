const axios = require('axios').default;

class Busquedas{
    historial = ['Argentina', 'Tegucigalpa', 'Madrid']

    constructor(){
        //TODO: leer DB si existe
    }

    async ciudad( lugar = ''){
        //Realizar HTTP Request
        try {
            
            console.log(lugar)
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/MADRID.json?access_token=pk.eyJ1IjoiaXZhbmZsb3Jlczk2IiwiYSI6ImNrczg4bTEzZjF0bHMycW5qYmR1OWo1M3AifQ.iCGH51O4b8kOnOOY0w4QnQ&limit=5&language=es')
            console.log(resp.data)
            return [] // retornar las ciudades que conincidan con el input
        } catch (error) {
            return []
            
        }
    }
}

module.exports = Busquedas