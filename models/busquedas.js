const axios = require('axios').default;

class Busquedas{
    historial = ['Argentina', 'Tegucigalpa', 'Madrid']

    constructor(){
        //TODO: leer DB si existe
    }
    get paramsMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language':'es'
        }
    }

    async ciudad( lugar = ''){
        //Realizar HTTP Request
        try {
            
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            })
            
            const resp = await instance.get()
            console.log(resp.data)
            return [] // retornar las ciudades que conincidan con el input
        } catch (error) {
            console.log('UPS!');
            return []
            
        }
    }
}

module.exports = Busquedas