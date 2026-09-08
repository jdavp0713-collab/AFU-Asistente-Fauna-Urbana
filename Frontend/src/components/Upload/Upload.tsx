import { useRef, useState } from "react";

import "./Upload.css";

interface UploadProps {
    onImageSelected: (file: File) => void;
}

function Upload({ onImageSelected }: UploadProps) {

    const inputRef = useRef<HTMLInputElement>(null);

    const [preview, setPreview] = useState<string | null>(null);

    const seleccionarImagen = () => {
        inputRef.current?.click();
    };

    const cambiarImagen = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {

        if (!e.target.files) return;

        const archivo = e.target.files[0];

        if (!archivo) return;

        setPreview(
            URL.createObjectURL(archivo)
        );

        onImageSelected(archivo);
    };

    return (

        <div className="upload">

            <div className="upload-box">

                <div className="upload-icon">
                    📷
                </div>

                <h2>
                    Subir fotografía
                </h2>

                <p>
                    Selecciona una imagen de un animal para que AFU
                    intente identificarlo.
                </p>

                <button
                    className="upload-button"
                    onClick={seleccionarImagen}
                >
                    Seleccionar imagen
                </button>

                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    hidden
                    onChange={cambiarImagen}
                />

                {

                    preview && (

                        <div className="preview-wrapper">

                            <img
                                src={preview}
                                alt="Vista previa"
                                className="preview-image"
                            />

                        </div>

                    )

                }

            </div>

        </div>

    );

}

export default Upload;