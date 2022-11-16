## SET TS EXPRESS PROJECT

* ```npm init -y```
* `npm install express`
* `npm install @types/express -D`
* `npm install ts-node-dev -D`
* To init ts project (create tsconfig.json): `npm run tsc -- --init`
* To make the build: Add a script in package json: `"tsc": "tsc"`
* To run the api after built: Add a script in package json: `"start": "node build/index.js"`
* To make continuos build after changes: Add a script in package json: `"dev": "ts-node-dev src/index.ts"`
* To make the build: `npm run tsc`
* To run continuous building: `npm run dev`


#### IMPORT JSON FILE

We have to add a new field in **tsconfig.json**. The field is:
* `"resolveJsonModule": true`


