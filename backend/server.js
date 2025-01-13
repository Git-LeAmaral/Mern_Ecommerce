import app from './app.js';
import dotenv from 'dotenv';
import { connectMongoDatabase } from './config/db.js';

dotenv.config({path: 'backend/config/.env'})
connectMongoDatabase();

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
  
})
