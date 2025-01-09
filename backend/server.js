import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({path: 'backend/config/.env'})
const port = process.env.PORT || 3001;


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
  
})
