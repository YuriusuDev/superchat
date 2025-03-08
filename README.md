<img src="./source/icon.svg" width="64px" height="64px" align="right"/>

# Superchat

Realtime chat application using the following tools:

* [**ESBuild**](https://esbuild.github.io) - Local development and build tool.
* [**React**](https://react.dev) - Dynamic and interactive user interface.
* [**Firebase**](https://firebase.google.com) - Cloud database and hosting solution.

> [!Tip]
> Based on Fireship's React & Firebase chat application:
>
> [![](http://img.youtube.com/vi/zQyrwxMPm88/0.jpg)](https://www.youtube.com/watch?v=zQyrwxMPm88)

## Command Scripts

Run **`npm install`** to install missing dependencies.

- **`npm start`** - Starts the app and watch over file changes.
- **`npm run build`** - Generate the production build with ESBuild.
- **`npm run clean`** - Removes the generated build files.
- **`npm run deploy`** - Deploy and host to Firebase.

## Firebase API

* **Setup** - [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)
* **Authentication** - [https://firebase.google.com/docs/auth/web/start](https://firebase.google.com/docs/auth/web/start)
* **Firestore** - [https://firebase.google.com/docs/firestore/quickstart](https://firebase.google.com/docs/firestore/quickstart)
* **Hosting** - [https://firebase.google.com/docs/hosting/quickstart](https://firebase.google.com/docs/hosting/quickstart)

Define the corresponding Firebase configuration by creating the `server/variables.json` file:

```json
{
  "FIREBASE_API_KEY": "'...'",
  "FIREBASE_AUTH_DOMAIN": "'...'",
  "FIREBASE_PROJECT_ID": "'...'",
  "FIREBASE_STORAGE_BUCKET": "'...'",
  "FIREBASE_MESSAGING_SENDER_ID": "'...'",
  "FIREBASE_APP_ID": "'...'",
  "FIREBASE_MEASUREMENT_ID": "'...'"
}
```
