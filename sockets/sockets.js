const io = require('../index').io;
io.on('connection', client => { 
    client.on("event", data => {
      console.log(data);
    });
  
    client.on("disconnect", () => {
    });
  
    client.on("mensaje", (payload) => {
      console.log('Mensaje', payload);
      io.emit('mensaje', {admin: 'Nuevo mensaje'});
    });
  
});