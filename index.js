//este archivo es para correr correctamente la app en vercel junto a mongo
import { createApp } from "./app.js";
import { MovieModel} from "./models/mongo.js";
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_CONNECT_URI)
createApp({MovieModel: MovieModel});