import cron from 'node-cron';
import { cpuUsage } from 'process';
import fetchNewProducts from './fetchNewProducts';
import fs from 'fs';

const runCronService = () => {

  cron.schedule('0 0 * * *', async () => {
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

  return Object.assign(parseData, usageMemory());
}

const usageMemory = () => {
  const startMemory = cpuUsage();
  const now = Date.now();
  while (Date.now() - now < 500);
  return { userMemory: cpuUsage(startMemory).user, systemMemory: cpuUsage(startMemory).system };
}
export default { runCronService, writeCronFile, readCronFile };