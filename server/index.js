import express, { Router }  from 'express'
import Connection  from './database/db.js';
import Router from './routes/route.js';

const app = express(); 
const PORT = 8000;

app.use('/' , Router)

app.listen(PORT, ()=> console.log("Server is running on "+ PORT))
Connection();