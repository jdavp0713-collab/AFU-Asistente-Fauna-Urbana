from flask import Flask
from flask_cors import CORS

from routes.predict import predict_bp
from routes.chat import chat_bp


app = Flask(__name__)

CORS(app)

# Rutas
app.register_blueprint(predict_bp, url_prefix="/api")
app.register_blueprint(chat_bp, url_prefix="/api")


@app.route("/")
def inicio():

    return {
        "estado": "ok",
        "mensaje": "Backend Fauna Urbana funcionando"
    }


if __name__ == "__main__":

    app.run(
        debug=True,
        use_reloader=False,
        host="127.0.0.1",
        port=5000
    )