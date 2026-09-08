from flask import Blueprint

from controllers.predictController import predict

predict_bp = Blueprint("predict", __name__)

predict_bp.route("/predict", methods=["POST"])(predict)