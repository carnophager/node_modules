const Job = require('./Job.js')
var job = new Job();
job.on('done', (details) =>
    console.log("Weekly job was completed at", details.completedOn)
)
job.emit('start')

var job = new Job();
