import express, { Request, Response, NextFunction } from 'express'

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Route: ${req.url} Metodo: ${req.method}`);
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
})

app.get('/dashborad', (req: Request, res: Response) => {
  res.send('Dashborad Page');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
