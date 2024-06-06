// src/app.ts
import express, { json, urlencoded } from "express";
import { RegisterRoutes } from "../build/routes";
import swaggerUi from "swagger-ui-express";
import { Response as ExResponse, Request as ExRequest } from "express";

const app = express();

// https://tsoa-community.github.io/docs/live-reloading.html
// npx openapi-typescript-codegen -i ./build/swagger.json -o node-client -c fetch
app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);

export { app };

//https://tsoa-community.github.io/docs/getting-started.html
