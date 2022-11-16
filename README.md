## SET TS EXPRESS PROJECT

* ```npm init -y```
* To make the build: Add a script in package json: `"tsc": "tsc"`
* To init ts project (create tsconfig.json): `npm run tsc -- --init`
* `npm install express`
* `npm install @types/express -D`
* `npm install ts-node-dev -D`
* To make continuos build after changes: Add a script in package json: `"dev": "ts-node-dev src/index.ts"`
* To make the build: `npm run tsc`
* To run the api after built: Add a script in package json: `"start": "node build/index.js"`
