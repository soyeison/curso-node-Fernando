const Tarea = require("./tarea");
const colors = require("colors");

class Tareas {
  _listado = {};

  get listadorArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((t) => (this._listado[t.id] = t));
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadorArr.forEach((tarea, i) => {
      const idx = `${i + 1}`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;

      console.log(`${idx} ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) {
    //Si comletadas esta en true entonces solo aparecen las completadas
    if (completadas) {
      const filter = this.listadorArr.filter(
        (tarea) => tarea.completadoEn !== null
      );
      console.log();
      filter.forEach((tarea, i) => {
        const idx = `${i + 1}.`.green;
        const { desc, completadoEn } = tarea;
        console.log(`${idx} ${desc} :: ${completadoEn.green}`);
      });
    } else {
      const filter = this.listadorArr.filter(
        (tarea) => tarea.completadoEn === null
      );
      console.log();
      filter.forEach((tarea, i) => {
        const idx = `${i + 1}.`.green;
        const { desc } = tarea;
        console.log(`${idx} ${desc} :: ${"Pendiente".red}`);
      });
    }
  }

  toggleCmpletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString();
      }
    });

    this.listadorArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });
  }
}

module.exports = Tareas;
