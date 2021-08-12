const inquirer = require("inquirer");

require("colors");

const pausaMenu = [
    {
        type: 'input',
        message: `Ingrese ${'ENTER'.green} para continuar`,
        name: 'temp'
    }
]

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "Que desea hacer?",
    choices: [
      {
        value: 1,
        name: `${'1'.green}. Buscar lugar`,
      },
      {
        value: 2,
        name: `${'2'.green}. Historial`,
      },
      
      {
        value: 0,
        name: `${'0'.green}. Salir`,
      },
    ],
  },
];

const leerInput = async(message) =>{
    const question = {
        type: 'input',
        name: 'desc',
        message,
        validate( value ){
            if(value.length === 0) {
                return 'Por favor ingrese un valor'
            } 
            return true
        }
    }

    const {desc} = await inquirer.prompt(question)
    return desc
}

const pausa = async () => {
    console.log('\n')
    const {temp} = await inquirer.prompt(pausaMenu)
    return temp;
}

const inquiererMenu = async () => {
  console.clear();

  console.log("==================================".green);
  console.log("===== Seleccione una opcion ======".rainbow);
  console.log("==================================\n".green);

  const {opcion} = await inquirer.prompt(preguntas);

  return opcion;
};

const listarLugares = async(lugares=[]) =>{
  const choices =  lugares.map( (element, i) => {
    const idx = `${i + 1}`.green
    return {
      value: element.id,
      name: `${idx}. ${element.nombre}`
    }
    
  })

  choices.unshift({
    value: '0',
    name: '0'.green + '. Cancelar'
  })

  const pregunta = [ {
    type: 'list',
    name: 'id',
    message: 'Seleccione lugar: ',
    choices

  }]
  const {id} = await inquirer.prompt(pregunta)
  return id

}

const mostrarListadoChecklist = async(tareas=[]) =>{
  const choices =  tareas.map( (element, i) => {
    const idx = `${i + 1}`.green
    return {
      value: element.id,
      name: `${idx}. ${element.desc}`,
      checked: (element.completadoEn) ? true : false
    }
    
  })

  const pregunta = [ {
    type: 'checkbox',
    name: 'ids',
    message: 'Selecciones',
    choices

  }]
  const {ids} = await inquirer.prompt(pregunta)
  return ids

}

const confirmar = async (message) => {
  const question = [{
    name: 'OK',
    type: 'confirm',
    message
  }]

  const {OK} = await inquirer.prompt(question);
  return OK
}

module.exports = {
  inquiererMenu, pausa, leerInput, listarLugares, confirmar, mostrarListadoChecklist
};
