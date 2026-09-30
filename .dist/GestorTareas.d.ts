import ModeloTarea = require("./ModeloTarea");
declare class GestorTareas {
    private tareas;
    estaLleno(): boolean;
    agregar(tarea: ModeloTarea.Tarea): boolean;
    obtenerTodas(): ModeloTarea.Tarea[];
    filtrarPorEstado(estado: ModeloTarea.Estado): {
        tarea: ModeloTarea.Tarea;
        index: number;
    }[];
    buscarPorTitulo(titulo: string): ModeloTarea.Tarea | undefined;
}
export = GestorTareas;
//# sourceMappingURL=GestorTareas.d.ts.map