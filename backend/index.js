import express, {urlencoded} from 'express'
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"
import postRoutes from "./routes/postRoutes.js";
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
connectDB();


const PORT = process.env.PORT || 5555

const app = express()

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(cors());
app.use('/api/auth', authRoutes)
app.use('/api/posts', postRoutes)


app.get('/', (req, res) => {
  res.send("Hello Version25 Team");
})

app.listen(PORT, ()=> console.log(`Backend on ${PORT}`))