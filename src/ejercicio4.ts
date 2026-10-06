// Clase de inventario antigua (Adaptee)
class InventarioViejo {
  private items: any[] = [];

  public agregarItem(item: any): void {
    this.items.push(item);
  }

  public obtenerItems(): any[] {
    return this.items;
  }
}

interface Equipo {
  nombre: string;
  tipo: string;
  estado: string;
}

interface Inventario {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): Equipo[];
}

class AdaptadorInventario implements Inventario {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarItem({
      nombre: nombre,
      tipo: tipo,
      estado: estado,
    });
  }

  public listarEquipos(): Equipo[] {
    return this.inventarioViejo.obtenerItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
