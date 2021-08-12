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

    get paramsOpenWeather(){
        return {
            appid: process.env.OPENWEATHER_KEY,
            units:'metric',
            lang: 'es'
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
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0] ,
                lat: lugar.center[1]
            })
            )
        } catch (error) {
            console.log('UPS!');
            return []
            
        }
    }

    async climaLugar(lat, lon){
        try {
            
            const instance = axios.create({
                baseURL: 'https://api.openweathermap.org/data/2.5/weather',
                params:{...this.paramsOpenWeather, lon, lat}
            })

            const resp = await instance.get();
            const {weather, main} = resp.data
            const weatherResp = {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
            
            return  weatherResp
        } catch (error) {
            console.log('UPS Clima', error)
        }
    }
}

module.exports = Busquedas