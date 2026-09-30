# Expo Basketball Scoreboard

Aplicación de marcador de básquet desarrollada con React Native y Expo.

Permite registrar los puntos de dos equipos, visualizar el resultado actual, reiniciar el partido y deshacer jugadas.

## Instalación

Instalar las dependencias:

```bash
npm install
```

Iniciar la aplicación:

```bash
npx expo start
```

## Ejercicios

El proyecto fue desarrollado de forma incremental. Cada ejercicio se encuentra disponible en su respectiva rama:

- `feature/ejercicio1`
- `feature/ejercicio2`
- `feature/ejercicio3`
- `feature/ejercicio4`

# respuestas ej 2

1) El estado vive en el padre porque index.tsx necesita conocer y manejar los puntos de ambos equipos. Los PanelEquipo reciben los puntos y las funciones necesarias mediante props, manteniendo una única fuente de verdad.
2) A cada botón se le pasa, por ejemplo:

```tsx
onPress={() => onAnotar(2)}
```

El valor cambia según los puntos que corresponda anotar.

No alcanza con `onPress={onAnotar}` porque necesitamos indicar cuántos puntos debe sumar cada botón.

Tampoco debemos usar:

```tsx
onPress={onAnotar(2)}
```

porque eso ejecutaría la función durante el render en lugar de hacerlo al presionar el botón.