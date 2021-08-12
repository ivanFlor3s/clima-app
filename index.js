require('colors')
require('dotenv').config();
const {leerInput, inquiererMenu, listarLugares, pausa} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {
    let opt;
    const BUSQUEDAS = new Busquedas()

    do {
        opt = await inquiererMenu()

        switch(opt){
            case 1 :
                const lugarSearch = await leerInput('Ingrese la Ciudad: ')

                const lugares = await BUSQUEDAS.ciudad(lugarSearch)

                const id = await listarLugares(lugares)
               // console.log({id})
                const lugarSel = lugares.find( x=> x.id === id)
                // console.log(`lugarSel`, lugarSel)
                const weather = await BUSQUEDAS.climaLugar(lugarSel.lat, lugarSel.lng)
                
                console.clear()
                console.log('\nInformacion de la ciudad\n'.green)
                console.log('Ciudad: ', lugarSel.nombre)
                console.log('Lat: ', lugarSel.lat)
                console.log('Lng: ',lugarSel.lng)
                console.log('Temperatura: ' , weather.temp)
                console.log('Maxima: ', weather.max)
                console.log('Minima: ', weather.min)
                console.log('Que onda: ', weather.desc)
                break;
            case 2 :
                console.log( 'opcion 2')
                break;
            
        }
        opt == 0 ? null : await pausa()

    } while (opt != 0);

}

main()
