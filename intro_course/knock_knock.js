const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter();

emitter.once("knock", function(){
    console.log("knocking on the heavens door");
})

emitter.on("knock", (intruder)=> console.log("Knocking on an arrows door", intruder ? intruder : ""))

emitter.emit("knock")
emitter.emit("knock", "burgler")