# Interrogate Horde IP Masker Prototype

Simple proof of concept of a simple node server that accepts a URL in a query string, and an AI Horde API key in the headers, and then pipes the URL content back in the response.

## Running
- `npm install`
- `node index.js`
- `curl "http://localhost:3000/?url=<url>" -H 'apikey: <apikey>'`