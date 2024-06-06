"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// https://tsoa-community.github.io/docs/getting-started.html
// npm run tsc --outDir build --experimentalDecorators
// node build/src/server.js
// npm run tsoa spec
