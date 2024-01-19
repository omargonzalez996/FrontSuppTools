import React from "react";
import { Icon } from "@iconify/react";

const Sidebar = ({ selected, setSelected }) => {
  
  const selection = (option) => {
    console.log("click");
    setSelected(option);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-icon">
        <Icon icon="fa-solid:tools" width={"50"} color="#303030" />
      </div>
      <div className="sidebar-menu">
        <button
          className={selected == 1 ? `active` : ``}
          onClick={() => selection(1)}
        >
          Resumen
        </button>
        <button
          className={selected == 2 ? `active` : ``}
          onClick={() => selection(2)}
        >
          Saldo
        </button>
        <button
          className={selected == 3 ? `active` : ``}
          onClick={() => selection(3)}
        >
          Ventas
        </button>
        <button
          className={selected == 4 ? `active` : ``}
          onClick={() => selection(4)}
        >
          Encriptacion
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
