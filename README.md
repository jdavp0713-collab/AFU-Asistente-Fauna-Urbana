# AFU - Asistente de Fauna Urbana

AFU es una aplicación web que integra visión por computador y un modelo
conversacional de inteligencia artificial para identificar animales mediante
fotografías y permitir consultas en lenguaje natural sobre el animal identificado.

## Tecnologías principales

### Frontend
- React
- TypeScript
- Vite
- Axios

### Backend
- Python
- Flask
- TensorFlow
- PyTorch
- Transformers
- PEFT
- BitsAndBytes

## Inteligencia Artificial

### Clasificación de imágenes
- MobileNetV3Small
- 12 categorías de animales
- Transfer Learning y Fine-Tuning
- Modelo final: `modelo_animales_final_v3.keras`

### Modelo conversacional
- Qwen2.5-1.5B-Instruct
- Ajuste mediante QLoRA
- Adaptador AFU V4

## Ejecución

### Backend

```bash
cd Backend
pip install -r requirements.txt
python app.py


cd Frontend
npm install
npm run dev
