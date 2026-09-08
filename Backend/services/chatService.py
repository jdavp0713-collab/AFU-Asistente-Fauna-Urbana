from predictor import predictor

from chatbot.memoria import memoria

from services.afuModelService import afu_model


class ChatService:

    # ========================================================
    # IDENTIFICAR ANIMAL
    # ========================================================

    def predecir(
        self,
        ruta_imagen
    ):

        # Realizar predicción con el modelo visual
        resultado = predictor.predecir(
            ruta_imagen
        )

        nombre_animal = resultado["animal"]
        confianza = resultado["confianza"]

        # ====================================================
        # CONTEXTO PARA EL MODELO CONVERSACIONAL
        # ====================================================

        animal_identificado = {

            "nombre": nombre_animal,

            "confianza_clasificador": confianza
        }

        # Guardar el animal actualmente identificado
        memoria.guardar_animal(
            animal_identificado
        )

        # ====================================================
        # MENSAJE INICIAL
        # ====================================================

        mensaje = (

            f"🦉 ¡Análisis completado!\n\n"

            f"He identificado un **{nombre_animal}** "
            f"con una confianza del **{confianza:.2f} %**.\n\n"

            f"Ahora puedes preguntarme sobre este animal."
        )

        return {

            "success": True,

            "animal": animal_identificado,

            "confianza": confianza,

            "mensaje": mensaje
        }


    # ========================================================
    # CHAT CON AFU V4
    # ========================================================

    def preguntar(
        self,
        pregunta
    ):

        animal = memoria.obtener_animal()

        if animal is None:

            return {

                "success": False,

                "mensaje":
                    "Primero debes identificar un animal."
            }

        try:

            respuesta = afu_model.preguntar(

                pregunta,

                animal
            )

            return {

                "success": True,

                "respuesta": respuesta
            }

        except Exception as error:

            print(
                "ERROR AFU V4:",
                error
            )

            return {

                "success": False,

                "mensaje":
                    "AFU no pudo generar una respuesta en este momento."
            }


chat_service = ChatService()