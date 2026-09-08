import { useEffect, useRef } from "react";

import Message from "../Message/Message";
import AFUThinking from "../AFUThinking/AFUThinking";

import type { Message as MessageType } from "../../types/message";

import "./Chat.css";

interface Props {
    mensajes: MessageType[];
    pensando: boolean;
}

function Chat({ mensajes, pensando }: Props) {

    const finalChat = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        finalChat.current?.scrollIntoView({
            behavior: "smooth"
        });

    }, [mensajes, pensando]);

    if (mensajes.length === 0 && !pensando) {

        return (
            <div className="chat-empty">

                <div className="owl">
                    🦉
                </div>

                <h2>AFU</h2>

                <h3>Asistente de Fauna Urbana</h3>

                <p>
                    Sube una fotografía de un animal urbano para comenzar la conversación.
                </p>

            </div>
        );
    }

    return (
        <div className="chat">

            {
                mensajes.map((mensaje, index) => (

                    <Message
                        key={index}
                        mensaje={mensaje}
                    />

                ))
            }

            {
                pensando && (
                    <AFUThinking />
                )
            }

            <div ref={finalChat}></div>

        </div>
    );
}

export default Chat;