# Ngrok - show app from your PC


```sh
npm i ngrok -D
```

```json
{
  "name": "debug",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "tunnel": "ngrok http 8080"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "actions-on-google": "^2.6.0",
    "dialogflow-fulfillment": "^0.6.1",
    "express": "^4.16.4"
  },
  "devDependencies": {
    "ngrok": "^3.1.1"
  }
}
```

```bash
# opens port in ngrok service to show your app (one console)
npm run tunnel

# launch app (second console)
node app

# go to address that gives ngrok console
```