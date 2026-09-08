from flask import Blueprint, request, jsonify

from services.chatService import chat_service

chat_bp = Blueprint("chat", __name__)


@chat_bp.route("/chat", methods=["POST"])
def chat():

    datos = request.get_json()

    if not datos:

        return jsonify({
            "success": False,
            "mensaje": "No se recibió información."
        }), 400

    mensaje = datos.get("mensaje")

    if not mensaje:

        return jsonify({
            "success": False,
            "mensaje": "Debes enviar un mensaje."
        }), 400

    respuesta = chat_service.preguntar(mensaje)

    return jsonify(respuesta)