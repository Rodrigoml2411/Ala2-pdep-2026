import ModeloTarea = require("./ModeloTarea");

const MAX_TAREAS = 10;

class GestorTareas {
  private tareas: ModeloTarea.Tarea[] = [];

  estaLleno(): boolean {
    return this.tareas.length >= MAX_TAREAS;
  }

  agregar(tarea: ModeloTarea.Tarea): boolean {
    if (this.estaLleno()) {
      return false;
    }

    this.tareas.push(tarea);
    return true;
  }

  obtenerTodas(): ModeloTarea.Tarea[] {
    return [...this.tareas];
  }

  filtrarPorEstado(estado: ModeloTarea.Estado): { tarea: ModeloTarea.Tarea; index: number }[] {
    return this.tareas.reduce<{ tarea: ModeloTarea.Tarea; index: number }[]>((encontradas, tarea, index) => {
      if (tarea.estado === estado) {
        encontradas.push({ tarea, index });
      }
      return encontradas;
    }, []);
  }

  buscarPorTitulo(titulo: string): ModeloTarea.Tarea | undefined {
    return this.tareas.find((tarea) => tarea.titulo === titulo);
  }
}

export = GestorTareas;