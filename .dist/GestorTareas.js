"use strict";
const ModeloTarea = require("./ModeloTarea");
const MAX_TAREAS = 10;
class GestorTareas {
    constructor() {
        this.tareas = [];
    }
    estaLleno() {
        return this.tareas.length >= MAX_TAREAS;
    }
    agregar(tarea) {
        if (this.estaLleno()) {
            return false;
        }
        this.tareas.push(tarea);
        return true;
    }
    obtenerTodas() {
        return [...this.tareas];
    }
    filtrarPorEstado(estado) {
        return this.tareas.reduce((encontradas, tarea, index) => {
            if (tarea.estado === estado) {
                encontradas.push({ tarea, index });
            }
            return encontradas;
        }, []);
    }
    buscarPorTitulo(titulo) {
        return this.tareas.find((tarea) => tarea.titulo === titulo);
    }
}
module.exports = GestorTareas;
//# sourceMappingURL=GestorTareas.js.map