import api from "../api/api";

export const predecirAnimal = async (imagen: File) => {

    const formData = new FormData();

    formData.append("imagen", imagen);

    const respuesta = await api.post("/predict", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });

    return respuesta.data;
};


export const enviarPregunta = async (mensaje: string) => {

    const respuesta = await api.post("/chat", {
        mensaje
    });

    return respuesta.data;
};