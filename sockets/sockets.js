const io = require('../index').io;
const Band = require('../models/band');
const Bands = require('../models/bands');

const bands = new Bands();

bands.addBand(new Band('Queen'));
bands.addBand(new Band('Bon Jovi'));
bands.addBand(new Band('Heroes del Silencio'));
bands.addBand(new Band('Metallica'));
console.log(bands);


io.on('connection', client => { 
    console.log('Cliente conectado');

    client.emit('bands', bands.getBands());
  
    client.on("disconnect", () => {
    });
  
    client.on("vote-band", (payload) => {  
      bands.voteBand(payload.id);
      io.emit('bands', bands.getBands()); 
    });

    client.on("add-band", (payload)=>{
      bands.addBand(new Band(payload.name));
      io.emit('bands', bands.getBands());
    });

    client.on("delete-band", (payload) => {  
      bands.deleteBand(payload.id);
      io.emit('bands', bands.getBands()); 
    });
  
});