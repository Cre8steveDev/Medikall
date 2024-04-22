import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/health', (req: Request, res: Response) => {
  res.send('Yuuup! Server still up and running 😄');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
