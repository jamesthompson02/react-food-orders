import express, { Request, Response } from "express";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req: Request, res: Response) => {
  res.send(`<h1>Home page</h1>`);
});

export default server;
