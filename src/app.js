import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(cookieParser());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Default Server
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '..', 'public') });
});

//routes
import userRoute from './routes/user.routes.js'

// routes declaration
app.use('/api/v1/',userRoute)

export {
    app
};
