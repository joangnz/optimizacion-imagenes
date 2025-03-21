import ImageEditor from "../ImageEditor";
const Ejercicio3 = () => {
    return (
        <div className="p-6 text-black dark:text-gray-300">
            <h1 className="text-3xl font-bold mb-4">Ejercicio 3:
                Manipulación de Imágenes con Canvas</h1>
            <p className="mb-4">
                Sube una imagen y aplica efectos en tiempo real usando la API Canvas.
            </p>
            <ImageEditor />
        </div>
    );
};
export default Ejercicio3;