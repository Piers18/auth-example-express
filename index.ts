import express, { Request, Response, NextFunction } from 'express'

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// logger
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Route: ${req.url} Metodo: ${req.method}`);
  next();
});


// isAuthenticated
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.query.login === 'user@gmail.com') {
    next();
  } else {
    res.send('No tienes permiso para acceder a esta ruta');
  }
});


app.get('/dashboard', (req: Request, res: Response) => {
  res.send('Dashboard Page');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
