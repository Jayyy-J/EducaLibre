# Modelo de IA de EducaLibre (TensorFlow Lite)

Esta carpeta contiene (o contendría) el modelo de TensorFlow Lite para la personalización de contenidos en la aplicación EducaLibre.

## Visión General

El modelo de IA es un modelo de recomendación simple que se ejecuta localmente en el dispositivo del usuario. Su objetivo es adaptar la dificultad y el tipo de contenido presentado al usuario en función de su progreso y sus interacciones con la aplicación.

## Proceso de Creación del Modelo (Visión General)

1.  **Recopilación de Datos:** Se necesitarían datos de interacciones de usuarios con los contenidos educativos. Estos datos podrían incluir:
    -   Tiempo dedicado a cada lección.
    -   Resultados de los cuestionarios.
    -   Contenidos completados.
    -   Contenidos saltados.

2.  **Entrenamiento del Modelo:**
    -   Se utilizaría un framework como TensorFlow o PyTorch para entrenar un modelo de recomendación (por ejemplo, usando filtrado colaborativo o un modelo basado en contenido).
    -   El modelo se entrenaría para predecir qué contenido es más probable que sea adecuado para un usuario en un momento dado.

3.  **Conversión a TensorFlow Lite:**
    -   Una vez entrenado, el modelo se convertiría al formato TensorFlow Lite (`.tflite`). Este formato está optimizado para su uso en dispositivos móviles y de borde.
    -   La conversión se realizaría utilizando las herramientas de conversión de TensorFlow.

4.  **Integración en la Aplicación:**
    -   El archivo `.tflite` se añadiría a los assets de la aplicación de React Native.
    -   Se utilizaría una librería como `react-native-tflite-runtime` para cargar y ejecutar el modelo en la aplicación.

## Modelo de Ejemplo

En ausencia de un modelo entrenado, la aplicación podría empezar con una lógica de recomendación basada en reglas simples. Por ejemplo:

-   Si un usuario completa con éxito 3 lecciones de nivel "básico", se le recomienda una lección de nivel "intermedio".
-   Si un usuario falla un cuestionario dos veces, se le recomienda una lección de repaso.
