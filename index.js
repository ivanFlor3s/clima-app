require('colors')
require('dotenv').config();
const {leerInput, inquiererMenu, pausa} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');


const main = async() => {
    let opt;
    const BUSQUEDAS = new Busquedas()

    do {
        opt = await inquiererMenu()

        switch(opt){
            case 1 :
                const lugar = await leerInput('Ingrese la Ciudad: ')

                await BUSQUEDAS.ciudad(lugar)
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
