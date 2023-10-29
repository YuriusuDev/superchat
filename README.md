# Superchat

A realtime chat app using the following tools:

* [**Vite**](https://vitejs.dev) - Fast web app development build tool.
* [**React**](https://react.dev) - Dynamic and interactive user interface.
* [**Firebase**](https://firebase.google.com) - Cloud database and hosting solution.

Based on Fireship's React & Firebase chat app:

[![](http://img.youtube.com/vi/zQyrwxMPm88/0.jpg)](https://www.youtube.com/watch?v=zQyrwxMPm88)

## Command Scripts

Run **`npm install`** to install missing dependencies.

* **`npm start`** - Starts the app in development mode.
* **`npm run build`** - Builds the app for production.
* **`npm run serve`** - Serves a local preview of production build.

## Firebase API

* **Setup** - [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)
* **Authentication** - [https://firebase.google.com/docs/auth/web/start](https://firebase.google.com/docs/auth/web/start)
* **Firestore** - [https://firebase.google.com/docs/firestore/quickstart](https://firebase.google.com/docs/firestore/quickstart)
* **Hosting** - [https://firebase.google.com/docs/hosting/quickstart](https://firebase.google.com/docs/hosting/quickstart)

Use Vite's [**`.env`**](https://vitejs.dev/guide/env-and-mode.html#env-files) file feature to access the app configuration with the corresponding environment variables:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_MEASUREMENT_ID
```
