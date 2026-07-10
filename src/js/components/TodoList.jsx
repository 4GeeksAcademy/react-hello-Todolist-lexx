import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog"
  ]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  // Guardamos la URL de la imagen que generamos para usarla de fondo
  const backgroundImageUrl = "https://lh3.googleusercontent.com/d/1Xl0y7eOQYx3oFpX7uX9g_gGvXbYmZa-I";

  return (
    /* CONTENEDOR PRINCIPAL: Ocupa toda la pantalla y aplica el fondo tecnológico */
    <div 
      className="d-flex flex-column align-items-center justify-content-center" 
      style={{ 
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.75), rgba(10, 15, 30, 0.85)), url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        padding: "20px"
      }}
    >
      {/* Título de la aplicación estilo Neón Cian */}
      <h1 
        className="display-1 text-info text-opacity-70 fw-extralight m-0 mb-4"
        style={{ 
          letterSpacing: "4px",
          textShadow: "0 0 20px rgba(13, 202, 240, 0.6), 0 0 40px rgba(13, 202, 240, 0.2)"
        }}
      >
        todos
      </h1>

      {/* Tarjeta de tareas translúcida (Glassmorphism) */}
      <div 
        className="card w-100 border border-info border-opacity-25 rounded-3 shadow-lg" 
        style={{ 
          maxWidth: "550px",
          background: "rgba(10, 20, 35, 0.65)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)", // Soporte para Safari
          boxShadow: "0 0 30px rgba(13, 202, 240, 0.15)"
        }}
      >
        
        {/* Input Controlado */}
        <div className="border-bottom border-secondary border-opacity-25">
          <input
            type="text"
            className="form-control form-control-lg border-0 py-3 ps-4 fs-3 fw-light text-info"
            placeholder="What needs to be done?"
            style={{ 
              fontStyle: "italic", 
              boxShadow: "none",
              background: "transparent",
              textShadow: "0 0 5px rgba(13, 202, 240, 0.3)"
            }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Lista de Tareas */}
        <ul className="list-group list-group-flush" style={{ background: "transparent" }}>
          {tasks.length === 0 ? (
            <li className="list-group-item py-3 ps-4 text-muted fst-italic fs-5 fw-light" style={{ background: "transparent" }}>
              No hay tareas, añadir tareas
            </li>
          ) : (
            tasks.map((task, index) => (
              <TodoItem 
                key={index} 
                task={task} 
                onDelete={() => deleteTask(index)} 
              />
            ))
          )}
        </ul>

        {/* Footer con el contador en color cian suave */}
        <div 
          className="card-footer text-info text-opacity-50 py-2 ps-4 border-top-0 fs-6 fw-light"
          style={{ background: "rgba(5, 10, 20, 0.4)" }}
        >
          {tasks.length} {tasks.length === 1 ? "item" : "items"} left
        </div>
      </div>

      {/* Cambios rápidos de colores para inputs de Bootstrap mediante estilos internos */}
      <style>{`
        .form-control::placeholder { 
          color: rgba(13, 202, 240, 0.3) !important; 
        }
        .form-control:focus {
          color: #0dcaf0 !important;
        }
      `}</style>
    </div>
  );
};

export default TodoList;