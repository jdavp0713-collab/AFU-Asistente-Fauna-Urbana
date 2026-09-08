import { useState } from "react";

import "./Input.css";

interface Props {
    onSend: (mensaje: string) => void;
    pensando: boolean;
}

function Input({
    onSend,
    pensando
}: Props) {

    const [texto, setTexto] = useState("");

    function enviar() {

        if (pensando) return;

        const mensaje = texto.trim();

        if (mensaje === "") return;

        onSend(mensaje);

        setTexto("");
    }

    function presionarEnter(
        e: React.KeyboardEvent<HTMLInputElement>
    ) {

        if (e.key === "Enter" && !pensando) {
            enviar();
        }
    }

    return (
        <div className="input-container">

            <input
                className="chat-input"
                type="text"
                placeholder={
                    pensando
                        ? "AFU está pensando..."
                        : "Pregúntale algo a AFU..."
                }
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={presionarEnter}
                disabled={pensando}
            />

            <button
                className="send-button"
                onClick={enviar}
                disabled={
                    pensando ||
                    texto.trim() === ""
                }
            >
                {
                    pensando
                        ? "Pensando..."
                        : "Enviar"
                }
            </button>

        </div>
    );
}

export default Input;