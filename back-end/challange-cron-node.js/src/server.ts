import express from 'express';
import routes from './routes';
import dbconnect   from './repository/db';
import openApiConfigs from './openApiConfigs';
import cronService from "./services/cronService";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());
openApiConfigs();
app.use(routes);
dbconnect();

app.listen(3000, () => console.log('running server'));
export default app;
