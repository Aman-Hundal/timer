//output -> print beep (usine process .stdout.write('\x07)) after a specified amount of time has passed.
// input -> cmd line args
// rules -> user can put in unlimited numbers of alarms using the cmd line args. process.argsvs has to be used.... test
// steps -> 1. manipulate cmd line args to get your number (index 2 onward ) 2. for loop through the array 3. apply settimeout to make the ms into i of the array

const alarmClock = function(cmdLineArgs) {
  if (cmdLineArgs === undefined) {
    return;
  }
  let args = cmdLineArgs.slice(2);
  for (let item of args) {
    if (isNaN(item) === false && item > 0) {
      setTimeout(() => {
        process.stdout.write(`Alarm ${item}: BEEP`);
      }, item * 1000);
    }
    setTimeout(() => {
      process.stdout.write("\n");
    }, item * 1000);
  }
};

alarmClock(process.argv);