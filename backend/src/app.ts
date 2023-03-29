import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/health', (req: Request, res: Response)=> res.send('ok'))
  
  
  app.listen(4000, ()=> console.log(`Server is listening on port 4000`))