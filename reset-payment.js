var cron = require('node-cron');

cron.schedule('0 1 5 * *', () => {
  console.log('running a task setiap detik 5');
});