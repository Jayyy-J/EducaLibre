# Configuración de Firebase y Sincronización

Esta carpeta contiene la configuración relacionada con Firebase para el proyecto EducaLibre.

## Visión General

Firebase se utiliza para dos propósitos principales en EducaLibre:

1.  **Autenticación de Usuarios:** Para gestionar las cuentas de los usuarios.
2.  **Base de Datos en Tiempo Real:** Para almacenar los datos de los usuarios y el progreso, y para sincronizar los datos entre el dispositivo local y la nube.

## Proceso de Sincronización

La aplicación está diseñada para funcionar offline primero. Esto significa que todos los datos se guardan primero en una base de datos local en el dispositivo (por ejemplo, usando SQLite). Cuando la aplicación detecta una conexión a internet, inicia un proceso de sincronización con Firebase.

### Lógica de Sincronización

1.  **Detección de Conexión:**
    -   La aplicación de React Native utilizará una librería como `@react-native-community/netinfo` para detectar cambios en el estado de la red.

2.  **Cola de Sincronización:**
    -   Todas las acciones que modifican datos (por ejemplo, registrar un nuevo usuario, completar una lección) se añadirán a una cola de "trabajos de sincronización" en el almacenamiento local.
    -   Cada trabajo en la cola representará una operación de escritura que debe realizarse en Firebase.

3.  **Procesamiento de la Cola:**
    -   Cuando se detecta una conexión a internet, la aplicación comenzará a procesar los trabajos de la cola en orden.
    -   Por cada trabajo, se realizará la operación correspondiente en Firebase (por ejemplo, crear un nuevo usuario con Firebase Auth, escribir en la Realtime Database).
    -   Una vez que una operación se completa con éxito, se elimina de la cola local.

4.  **Sincronización Descendente:**
    -   Después de procesar la cola de subida, la aplicación puede solicitar a Firebase los datos más recientes (por ejemplo, nuevos contenidos, actualizaciones del perfil) y actualizar la base de datos local.

## Configuración del Proyecto de Firebase

1.  **Crear un Proyecto:**
    -   Ve a la [Consola de Firebase](https://console.firebase.google.com/) y crea un nuevo proyecto.

2.  **Configurar la Autenticación:**
    -   Habilita los proveedores de autenticación que desees (por ejemplo, correo electrónico y contraseña).

3.  **Configurar la Realtime Database:**
    -   Crea una nueva base de datos en tiempo real.
    -   Establece las reglas de seguridad para controlar el acceso a los datos.

4.  **Obtener las Credenciales:**
    -   **Para el Backend:** Genera una clave de cuenta de servicio (un archivo JSON) y guárdala en `backend/firebase/serviceAccountKey.json`.
    -   **Para el Frontend:** En la configuración de tu proyecto de Firebase, añade una nueva aplicación web y copia el objeto de configuración de Firebase. Este objeto se utilizará en la aplicación de React Native para inicializar Firebase.
