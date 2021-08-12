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
                console.log({id})


                
                console.log('\nInformacion de la ciudad\n'.green)
                console.log('Ciudad: ')
                console.log('Lat: ')
                console.log('Lng: ')
                console.log('Temperatura: ')
                console.log('Maxima: ')
                console.log('Minima: ')
                break;
            case 2 :
                console.log( 'opcion 2')
                break;
            
        }
        opt == 0 ? null : await pausa()

    } while (opt != 0);

}

main()
