import os

from flask import request, jsonify
from werkzeug.utils import secure_filename

from services.predictionService import predecir_animal


UPLOAD_FOLDER = "uploads"


def predict():

    if "imagen" not in request.files:
        return jsonify({
            "success": False,
            "mensaje": "No se recibió ninguna imagen."
        }), 400

    archivo = request.files["imagen"]

    if archivo.filename == "":
        return jsonify({
            "success": False,
            "mensaje": "Debe seleccionar una imagen."
        }), 400

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    nombre = secure_filename(archivo.filename)

    ruta = os.path.join(UPLOAD_FOLDER, nombre)

    archivo.save(ruta)

    resultado = predecir_animal(ruta)

    return jsonify(resultado)