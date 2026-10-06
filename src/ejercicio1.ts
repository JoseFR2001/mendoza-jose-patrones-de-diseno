interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

class Inventario {
  private listaEquipo: Equipo[] = [];
  private static instancia: Inventario;
  private constructor() {}

  static obtenerInstancia(): Inventario {
    if (!Inventario.instancia) {
      Inventario.instancia = new Inventario();
    }
    return Inventario.instancia;
  }

  agregarEquipo(equipo: Equipo): void {
    this.listaEquipo.push(equipo);
  }

  listarEquipos(): Equipo[] {
    return this.listaEquipo;
  }
}

const inventario1 = Inventario.obtenerInstancia();
inventario1.agregarEquipo({
  nombre: "Notebook Dell",
  tipo: "Laptop",
  estado: "Disponible",
});
const inventario2 = Inventario.obtenerInstancia();
console.log(inventario2.listarEquipos());
console.log(inventario1 === inventario2);
