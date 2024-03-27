# Superchat

Realtime chat application using the following tools:

* [**ESBuild**](https://esbuild.github.io) - Local development and build tool.
* [**React**](https://react.dev) - Dynamic and interactive user interface.
* [**Firebase**](https://firebase.google.com) - Cloud database and hosting solution.

Based on Fireship's React & Firebase chat app:

[![](http://img.youtube.com/vi/zQyrwxMPm88/0.jpg)](https://www.youtube.com/watch?v=zQyrwxMPm88)

## Command Scripts

Run **`npm install`** to install missing dependencies.

* **`npm start`** - Starts the app and watch over file changes.

## Firebase API

* **Setup** - [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)
* **Authentication** - [https://firebase.google.com/docs/auth/web/start](https://firebase.google.com/docs/auth/web/start)
* **Firestore** - [https://firebase.google.com/docs/firestore/quickstart](https://firebase.google.com/docs/firestore/quickstart)
* **Hosting** - [https://firebase.google.com/docs/hosting/quickstart](https://firebase.google.com/docs/hosting/quickstart)

Use ESBuild's [**`define`**](https://esbuild.github.io/api/#define) option to access the app configuration:

```
process.env.FIREBASE_API_KEY
process.env.FIREBASE_AUTH_DOMAIN
process.env.FIREBASE_PROJECT_ID
process.env.FIREBASE_STORAGE_BUCKET
process.env.FIREBASE_MESSAGING_SENDER_ID
process.env.FIREBASE_APP_ID
process.env.FIREBASE_MEASUREMENT_ID
```
