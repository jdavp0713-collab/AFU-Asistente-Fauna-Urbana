import { useState } from "react";

import Header from "./components/Header/Header";
import Upload from "./components/Upload/Upload";
import Chat from "./components/Chat/Chat";
import Input from "./components/Input/Input";

import {
    predecirAnimal,
    enviarPregunta
} from "./services/chatService";

import type { Message } from "./types/message";

import "./App.css";

function App() {

    const [mensajes, setMensajes] = useState<Message[]>([]);

    const [animalDetectado, setAnimalDetectado] = useState(false);

    const [pensando, setPensando] = useState(false);


    async function subirImagen(file: File) {

        try {

            const respuesta = await predecirAnimal(file);

            setAnimalDetectado(true);

            setMensajes([
                {
                    autor: "bot",
                    texto: respuesta.mensaje
                }
            ]);

        } catch (error) {

            console.error(error);

            alert("No fue posible identificar el animal.");

        }

    }


    async function enviarMensaje(texto: string) {

        const historial = [

            ...mensajes,

            {
                autor: "user" as const,
                texto
            }

        ];

        setMensajes(historial);

        // Mostrar indicador de pensamiento
        setPensando(true);

        try {

            const respuesta = await enviarPregunta(texto);

            setMensajes([
                ...historial,
                {
                    autor: "bot",
                    texto: respuesta.respuesta
                }
            ]);

        } catch (error) {

            console.error(error);

            setMensajes([
                ...historial,
                {
                    autor: "bot",
                    texto:
                        "AFU no pudo generar una respuesta en este momento."
                }
            ]);

        } finally {

            // Ocultar indicador tanto si funciona
            // como si ocurre un error
            setPensando(false);

        }

    }


    return (

        <div className="app">

            <div className="afu-shell">

                <Header />

                <main className="afu-main">

                    <aside className="afu-sidebar">

                        <div className="section-label">
                            Identificación
                        </div>

                        <Upload
                            onImageSelected={subirImagen}
                        />

                    </aside>

                    <section className="afu-chat-panel">

                        <div className="chat-topbar">

                            <div>

                                <h2>
                                    Conversación con AFU
                                </h2>

                                <p>
                                    Pregunta sobre el animal identificado
                                </p>

                            </div>

                            <div className="status-badge">

                                <span></span>

                                AFU activo

                            </div>

                        </div>

                        <Chat
                            mensajes={mensajes}
                            pensando={pensando}
                        />

                        {

                            animalDetectado && (

                                <div className="chat-input-area">

                                    <Input
                                        onSend={enviarMensaje}
                                        pensando={pensando}
                                    />

                                </div>

                            )

                        }

                    </section>

                </main>

            </div>

        </div>

    );

}

export default App;