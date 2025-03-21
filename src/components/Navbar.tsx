import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
            <h1 className="text-xl font-bold">Optimización de Imágenes</h1>
            <div>
                <Link className="mr-4" to="/">Inicio</Link>
                <Link className="mr-4" to="/ex1">Ejercicio 1</Link>
                <Link className="mr-4" to="/ex2">Ejercicio 2</Link>
                <Link className="mr-4" to="/ex3">Ejercicio 3</Link>
                <Link className="mr-4" to="/ex4">Ejercicio 4</Link>
            </div>
        </nav>
    );
};
export default Navbar;