import { useState } from "react";

const ImageOptimizer = () => {
    const [originalFile, setOriginalFile] = useState<File | null>(null);

    const [optimizedImages, setOptimizedImages] = useState<{
        format:
        string; url: string
    }[]>([]);

    const handleFileChange = (event:
        React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setOriginalFile(file);
            generateOptimizedImages(file);
        }
    };

    const generateOptimizedImages = (file: File) => {
        const formats = ["image/webp", "image/avif"];
        const optimized = formats.map((format) => ({
            format,
            url: URL.createObjectURL(file),
        }));
        setOptimizedImages(optimized);
    };

    return (
        <div className="flex flex-col items-center">
            <input type="file" onChange={handleFileChange} className="mb-4 text-black dark:text-gray-300"
            />
            {originalFile && (
                <div className="w-full">
                    <h2 className="text-xl font-bold mt-4 text-black dark:text-gray-300">Imagen Original</h2>
                    <img src={URL.createObjectURL(originalFile)} alt="Original"
                        className="w-60 mt-2 mr-auto ml-auto text-black dark:text-gray-300" />
                </div>
            )}
            {optimizedImages.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-xl font-bold text-black dark:text-gray-300">Imágenes Optimizadas</h2>
                    <table className="mt-4 border-collapse border border-gray300 w-full text-center text-black dark:text-gray-300">
                        <thead>
                            <tr className="bg-gray-100 text-black">
                                <th className="border border-gray-300 p2">Formato</th>
                                <th className="border border-gray-300 p-2">Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {optimizedImages.map((img, index) => (
                                <tr key={index} className="border border-gray-300">
                                    <td className="border border-gray-300 p2">{img.format}</td>
                                    <td className="border border-gray-300 p-2">
                                        <img src={img.url} alt={img.format} className="w60" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ImageOptimizer;