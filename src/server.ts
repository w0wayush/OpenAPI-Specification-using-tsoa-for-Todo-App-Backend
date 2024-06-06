// src/server.ts
import { app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// https://tsoa-community.github.io/docs/getting-started.html
// npm run tsc --outDir build --experimentalDecorators
// node build/src/server.js
// npm run tsoa spec
