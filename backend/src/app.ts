import express, {Express, Request, Response } from 'express';
import cors from 'cors';
import { connectDb } from '@/config';
import { coursesProgramsRouter } from '@/routers/coursesPrograms-router';
import { coursesRouter } from '@/routers/courses-router';

console.log(process.env.PORT)
const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/health', (req: Request, res: Response)=> res.send('ok'))
  .use('/courses', coursesRouter)
  .use('/coursesPrograms', coursesProgramsRouter)
  

export function init(): Promise<Express> {
  console.log('init')
  connectDb()
  return Promise.resolve(app);
}
export default app;