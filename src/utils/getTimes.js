import { DateTime } from 'luxon';
export const getTimes = (time, mode) => {
  let result = DateTime.fromISO(time)
    .setLocale('pl-PL')
    .setZone('Europe/Warsaw');
  let tempTimes = [];
  let cycles = 0;
  let sleepTime = 0;

  if (mode == 'porasnu') {
    result = result.plus({ minutes: 15 });
    for (let i = 0; i < 6; i++) {
      result = result.plus({ minutes: 90 });
      sleepTime += 90;
      cycles++;
      tempTimes.push({
        time: result.toFormat('HH:mm'),
        cycles: cycles,
        sleepTime: sleepTime / 60,
      });
    }
  } else {
    result = result.minus({ minutes: 15 });
    for (let i = 0; i < 6; i++) {
      result = result.minus({ minutes: 90 });
      sleepTime += 90;
      cycles++;
      tempTimes.push({
        time: result.toFormat('HH:mm'),
        cycles: cycles,
        sleepTime: sleepTime / 60,
      });
    }
  }

  tempTimes.reverse();
  return tempTimes;
};
