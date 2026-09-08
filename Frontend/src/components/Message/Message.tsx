import type { Message as MessageType } from "../../types/message";

import "./Message.css";

interface Props {

    mensaje: MessageType;

}

function Message({ mensaje }: Props) {

    return (

        <div
            className={
                mensaje.autor === "bot"
                    ? "message bot"
                    : "message user"
            }
        >

            <div className="bubble">

                {mensaje.texto}

            </div>

        </div>

    );

}

export default Message;