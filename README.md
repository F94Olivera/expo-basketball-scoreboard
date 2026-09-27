# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

# respuestas ej 2

1) El estado vive en el padre porque index.tsx necesita conocer y manejar los puntos de ambos equipos. Los PanelEquipo reciben los puntos y las funciones necesarias mediante props, manteniendo una única fuente de verdad.
2) A cada botón le paso onPress={() => onAnotar(2)}, cambiando el valor según los puntos que tenga anotar. No alcanza con onPress={onAnotar} porque tengo que indicarle cuántos puntos tiene que sumar cada botón. Tampoco puedo usar onPress={onAnotar(2)}, porque eso ejecuta la función durante el render en vez de hacerlo al tocar el botón.
