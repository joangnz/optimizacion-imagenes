import ImageOptimizer from "../ImageOptimizer";

const Ex1 = () => {
    return (
        <div className="p-6 text-black dark:text-gray-300">
            <h1 className="text-3xl font-bold mb-4">
                Ex 1: Optimización de Imágenes
            </h1>
            <p className="mb-4">
                Suba una imagen y conviértala a diferentes formatos. Luego,
                compare los tamaños de archivo.
            </p>
            <ImageOptimizer />
        </div>
    );
};

export default Ex1;