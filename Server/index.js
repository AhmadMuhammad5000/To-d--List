import express from 'express';
import cors from 'cors';
import { taskRouter } from './Routers/taskRoute.js';

const app = express();

app.use(cors(
    {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
));

app.use(express.json());
app.use("/auth", taskRouter);

app.listen(5000, () => {
    console.log("App Listen on 5000");
})
