# Gestión de Contenidos de EducaLibre

Esta carpeta está destinada a contener todos los materiales educativos que se distribuirán con la aplicación para su uso offline.

## Estructura de Carpetas

Para mantener los contenidos organizados, se sugiere la siguiente estructura:

```
assets/
├── images/
│   ├── K01_basico_bienvenida.png
│   └── K02_intermedio_sistema_solar.jpg
├── audio/
│   ├── L01_basico_saludos.mp3
│   └── L02_intermedio_fotosintesis.mp3
└── text/
    ├── C01_basico_alfabeto.json
    └── C02_intermedio_celula.json
```

### Convención de Nomenclatura

Se recomienda utilizar una convención de nomenclatura para los archivos que facilite su identificación y carga en la aplicación. Por ejemplo:

`[TIPO]_[ID]_[NIVEL]_[NOMBRE].[EXTENSION]`

-   **TIPO:** `K` para imágenes, `L` para audio, `C` para texto (contenido).
-   **ID:** Un identificador único para el contenido.
-   **NIVEL:** El nivel de dificultad (`basico`, `intermedio`, `avanzado`).
-   **NOMBRE:** Un nombre descriptivo corto.
-   **EXTENSION:** La extensión del archivo (`.png`, `.mp3`, `.json`, etc.).

## Formato de los Contenidos de Texto

Los contenidos de texto se pueden almacenar en formato JSON para facilitar su análisis en la aplicación.

**Ejemplo de `C01_basico_alfabeto.json`:**

```json
{
  "id": "C01",
  "title": "El Alfabeto",
  "level": "basico",
  "type": "text",
  "content": [
    {
      "type": "paragraph",
      "text": "El alfabeto español tiene 27 letras."
    },
    {
      "type": "image",
      "source": "K01_basico_alfabeto_letras.png"
    },
    {
      "type": "paragraph",
      "text": "A, B, C, D, E, F, G, H, I, J, K, L, M, N, Ñ, O, P, Q, R, S, T, U, V, W, X, Y, Z."
    }
  ],
  "quiz": {
    "question": "¿Cuántas letras tiene el alfabeto español?",
    "options": ["25", "27", "29"],
    "answer": "27"
  }
}
```

## Carga en la Aplicación

La aplicación de React Native se configurará para que, en el primer inicio, copie los assets de esta carpeta a una ubicación de almacenamiento persistente en el dispositivo (utilizando `expo-file-system`). De esta manera, los contenidos estarán disponibles incluso si la aplicación se actualiza.
