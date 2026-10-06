interface Observador {
  notificar(nombreEquipo: string, nuevoEstado: string): void;
}

class Soporte implements Observador {
  public notificar(nombreEquipo: string, nuevoEstado: string): void {
    console.log(
      `Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}.`,
    );
  }
}

class Equipo {
  public nombre: string;
  public tipo: string;
  public estado: string;

  private observadores: Observador[] = [];

  constructor(nombre: string, tipo: string, estado: string) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estado;
  }

  public agregarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  public cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores(): void {
    for (const observador of this.observadores) {
      observador.notificar(this.nombre, this.estado);
    }
  }
}

const soporte = new Soporte();

const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);

equipo.cambiarEstado("en reparación");
