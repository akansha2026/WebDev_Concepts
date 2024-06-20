import express from 'express';
import logger from './middlewares/logger.js';
import cors from 'cors';
import userRouter from './routes/user-routes.js';

const server = express();

server.listen(8080, () => {
    console.log('✅ Server is running on http://localhost:8080');
});

// Middlewares

// 1. To log the request method and URL, we can use the logger middleware.
server.use(logger);

// 2. To convert the json request body to a JavaScript object, we can use the express.json() middleware.
server.use(express.json());

// 3. To enable CORS, we can use the cors middleware.
server.use(cors({
    origin: '*' // Allow all origins
}));

// Routes
server.get('/', (_, res) => {
    res.send('Hello World!');
});

server.use('/users', userRouter);