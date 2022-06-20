const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('randomEvent',()=>{
    console.log("Random event occured");
})

emitter.emit('randomEvent');


