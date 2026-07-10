import React from "react";

import TodoList from "../components/TodoList"; 

const Home = () => {
    return (
        <div className="text-center mt-5">
            {/* Aquí renderizas tu componente */}
            <TodoList />
        </div>
    );
};

export default Home;