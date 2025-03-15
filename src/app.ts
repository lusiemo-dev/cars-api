import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Route de test
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API is running!' });
});

export default app;