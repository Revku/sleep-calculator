import { DateTime } from 'luxon';
export const getTimes = (time, mode) => {
  let bedTime = DateTime.fromISO(time)
    .setLocale('pl-PL')
    .setZone('Europe/Warsaw');
  let tempTimes = [];
  let cycles = 0;
  let sleepTime = 0;

  if (mode == 'porasnu') {
    bedTime = bedTime.plus({ minutes: 15 });
    for (let i = 0; i < 6; i++) {
      bedTime = bedTime.plus({ minutes: 90 });
      sleepTime += 90;
      cycles++;
      tempTimes.push({
        time: bedTime.toFormat('HH:mm'),
        cycles: cycles,
        sleepTime: sleepTime / 60,
      });
    }
  } else {
    bedTime = bedTime.minus({ minutes: 15 });
    for (let i = 0; i < 6; i++) {
      bedTime = bedTime.minus({ minutes: 90 });
      sleepTime += 90;
      cycles++;
      tempTimes.push({
        time: bedTime.toFormat('HH:mm'),
        cycles: cycles,
        sleepTime: sleepTime / 60,
      });
    }
  }

  tempTimes.reverse();
  return tempTimes;
};
