class Memoria:

    def __init__(self):
        self.animal_actual = None

    def guardar_animal(self, animal):
        self.animal_actual = animal

    def obtener_animal(self):
        return self.animal_actual

    def limpiar(self):
        self.animal_actual = None


memoria = Memoria()