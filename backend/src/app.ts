import express, {Express, Request, Response } from 'express';
import cors from 'cors';
import { connectDb, loadEnv } from '@/config';
import { programsRouter, coursesRouter, coursesProgramsRouter  } from '@/routers';

console.log("PORT deveria ser undefined pois o dotenv não foi selecionado ainda porém está sendo PORT=", process.env.PORT)
loadEnv();
const app = express();

app
  .use(cors())
  .use(express.json())
  .get('/health', (req: Request, res: Response)=> res.send('ok'))
  .use('/courses', coursesRouter)
  .use('/coursesPrograms', coursesProgramsRouter)
  .use('/programs', programsRouter)
  

export function init(): Promise<Express> {
  connectDb()
  return Promise.resolve(app);
}
export default app;