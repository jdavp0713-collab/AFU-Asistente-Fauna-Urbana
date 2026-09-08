from services.chatService import chat_service


def predecir_animal(ruta_imagen):

    return chat_service.predecir(ruta_imagen)