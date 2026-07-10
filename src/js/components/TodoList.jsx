import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  // Estado para la entrada controlada
  const [inputValue, setInputValue] = useState("");
  
  // Estado para el listado de tareas
  const [tasks, setTasks] = useState([
    "Make the bed",
    "Wash my hands",
    "Eat",
    "Walk the dog"
  ]);

  // Agregar tarea al presionar Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue(""); // Limpiamos el input controlado
    }
  };

  // Eliminar tarea por su índice
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5" style={{ maxWidth: "550px" }}>
      {/* Título */}
      <h1 className="display-1 text-danger text-opacity-25 fw-light m-0">todos</h1>

      {/* Tarjeta estilo Bootstrap */}
      <div className="card w-100 shadow-sm border-0 rounded-0">
        
        {/* Entrada Controlada */}
        <div className="border-bottom">
          <input
            type="text"
            className="form-control form-control-lg border-0 py-3 ps-4 fs-3 fw-light text-secondary"
            placeholder="What needs to be done?"
            style={{ fontStyle: "italic", boxShadow: "none" }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>

        {/* Lista de Tareas */}
        <ul className="list-group list-group-flush">
          {tasks.length === 0 ? (
            <li className="list-group-item py-3 ps-4 text-muted fst-italic fs-5 fw-light">
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

        {/* Contador inferior */}
        <div className="card-footer bg-white text-muted py-2 ps-3 border-top-0 fs-6 fw-light shadow-sm">
          {tasks.length} {tasks.length === 1 ? "item" : "items"} left
        </div>
      </div>

      {/* Estilo rápido para el color del placeholder */}
      <style>{`
        .form-control::placeholder { color: #e6e6e6 !important; }
      `}</style>
    </div>
  );
};

export default TodoList;