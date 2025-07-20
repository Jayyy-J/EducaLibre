# Backend de EducaLibre

Este es el backend de la aplicación EducaLibre, desarrollado con Node.js, Express y Firebase.

## Configuración

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```

2.  **Configurar Firebase:**
    -   Crea un proyecto en [Firebase](https://firebase.google.com/).
    -   Ve a la configuración de tu proyecto y genera una nueva clave privada para la cuenta de servicio.
    -   Guarda el archivo JSON de la clave en `educalibre/backend/firebase/serviceAccountKey.json`.
    -   Descomenta y rellena la configuración de Firebase en `server.js`.

3.  **Ejecutar el servidor:**
    -   Para desarrollo (con recarga automática):
        ```bash
        npm run dev
        ```
    -   Para producción:
        ```bash
        npm start
        ```

## API Endpoints

-   `GET /`: Mensaje de bienvenida.
-   **(Por implementar):**
    -   `POST /api/users/register`
    -   `POST /api/users/login`
    -   `GET /api/content`
    -   `POST /api/content`

## Pruebas

Para ejecutar las pruebas unitarias, usa el siguiente comando:

```bash
npm test
```
