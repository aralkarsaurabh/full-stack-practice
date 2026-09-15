import express, { type Request, type Response } from "express";

const app = express();

app.get("/health", (_req: Request, res: Response) => {
    res.json({
        status: "ok"
    });
});

app.listen(3000, () => {
    console.log("Your server is live at http://localhost:3000");
});