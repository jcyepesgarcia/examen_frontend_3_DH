import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

function App() {
  const [total, setTotal] = useState(0);

  function getTotal(valor) {
    setTotal(total + valor);
  }

  return (
    <div className="App">
      <Cabecera total={total} />
      <Listado getTotal={getTotal} />
    </div>
  );
}

export default App;
