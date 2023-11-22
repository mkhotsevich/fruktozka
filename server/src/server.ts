import express from "express";
import { Server } from "socket.io";
import { createServer } from 'node:http'
import { authRouter } from "./routes/auth";
import cors from "cors";
import { titlesRouter } from "./routes/titles";
import { pointsRouter } from "./routes/points";

const app = express()

const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    }
});


app.use(cors())
app.use('/auth', authRouter)
app.use('/titles', titlesRouter)
app.use('/points', pointsRouter)


io.on('connect', (socket) => {
    console.log('a user connected');
});


export const startServer = () => server.listen(3000)