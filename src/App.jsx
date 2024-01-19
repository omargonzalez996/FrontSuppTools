import "./styles/index.scss";
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Encriptacion from "./components/Encriptacion/Encriptacion";
import Resumen from "./components/Resumen/Resumen";
import Saldo from "./components/Saldo/Saldo";
import Ventas from "./components/Ventas/Ventas";

function App() {
  let title = "Resumen";
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    switch (selected) {
      case 1:
        title = "Resumen";
        break;
      case 2:
        title = "Saldo";
        break;
      case 3:
        title = "Ventas";
        break;
      case 4:
        title = "Encriptación";
        break;
      default:
        title = "Resumen";
        break;
    }
  }, [selected]);

  return (
    <main>
      <h2 className="main-title">{title}</h2>
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="content">
        {selected == 1 ? <Resumen /> : null}
        {selected == 2 ? <Saldo /> : null}
        {selected == 3 ? <Ventas /> : null}
        {selected == 4 ? <Encriptacion /> : null}
      </div>
    </main>
  );
}

export default App;
