import express from "express";

import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });

    return app.listen(process.env.PORT, () => console.log("Server is running"));
});

