const EventEmitter = require('events');

class Job extends EventEmitter {}
job = new Job();

job.on('done', function(time_done) {
    console.log("Job was pronounced done at", time_done)
})

job.emit('done', new Date());
job.removeAllListeners();