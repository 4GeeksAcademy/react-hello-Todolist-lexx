import React, { useState } from "react";

const TodoItem = ({ task, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center py-3 ps-4 fs-4 fw-light text-info position-relative border-secondary border-opacity-25"
      style={{ 
        cursor: "default",
        background: "transparent" // Mantiene el fondo translúcido de la lista
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Texto de la tarea con un sutil brillo cian tecnológico */}
      <span style={{ textShadow: "0 0 8px rgba(13, 202, 240, 0.4)" }}>{task}</span>
      
      {/* Botón de eliminar estilo neón */}
      <button
        className="btn text-danger border-0 p-0 fs-3 position-absolute end-0 me-3"
        style={{ 
          visibility: isHovered ? "visible" : "hidden", 
          lineHeight: "1",
          textShadow: "0 0 10px rgba(220, 53, 69, 0.8)"
        }}
        onClick={onDelete}
      >
        &times;
      </button>
    </li>
  );
};

export default TodoItem;