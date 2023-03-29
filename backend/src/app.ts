import express, {Express, Request, Response } from 'express';
import cors from 'cors';


const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/health', (req: Request, res: Response)=> res.send('ok'))
  

export function init(): Promise<Express> {
  return Promise.resolve(app);
}
export default app;