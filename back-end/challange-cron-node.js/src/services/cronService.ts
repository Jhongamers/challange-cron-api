import cron from 'node-cron';
import { cpuUsage } from 'process';
import fetchNewProducts from './fetchNewProducts';
import fs from 'fs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const runCronService = () => {

  cron.schedule(process.env.CRON, async () => {
    await fetchNewProducts();
    writeCronFile();
    console.log('runing cron job');
  })
}

const writeCronFile = () => {
  const data = JSON.stringify({ lastCronRun: Date() });
  return fs.writeFileSync('./cron.json', data, 'utf-8');
}

const readCronFile = (): JSON => {
  const data = fs.readFileSync('./cron.json', 'utf-8');
  const parseData = JSON.parse(data);
    const mongoStatus = {mongoStatusDB:getMongoStatus()}
  return Object.assign(parseData, usageMemory(),mongoStatus);
}

const usageMemory = () => {
  const startMemory = cpuUsage();
  const now = Date.now();
  while (Date.now() - now < 500);
  return { userMemory: cpuUsage(startMemory).user, systemMemory: cpuUsage(startMemory).system };
}

const getMongoStatus = () => {
   switch (mongoose.connection.readyState) {
    case 0:
      return 'disconnected'
      break;
    case 1:
      return 'connected'
      break;
    case 2:
      return 'connecting'
      break;
    case 3:
      return 'disconnecting'
      break;
  }

      
}
export default { runCronService, writeCronFile, readCronFile };