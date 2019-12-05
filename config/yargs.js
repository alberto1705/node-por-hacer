const desc = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};

const argv = require('yargs').command('crear', 'Crear una tarea', desc)
    .command('actualizar', 'Actualiza el estado de la tarea', {
            ...desc,
            completado: {
                demand: false,
                alias: 'c',
                desc: 'Marca como completada la tarea',
                default: true
            }
        }

    )
    .command('borrar', 'Borra la tarea',
        desc
    ).help().argv;

module.exports = {
    argv
}