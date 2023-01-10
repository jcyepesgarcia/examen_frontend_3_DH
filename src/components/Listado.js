import React from "react";
import productos from "./data.json";
import Item from "./Item";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({ getTotal }) {
  return (
    <div className="container">
      {/* renderizamos los Item aquí */}
      {productos.map((elemento) => (
        <Item elemento={elemento} key={elemento.id} getTotal={getTotal} />
      ))}
    </div>
  );
}
