const mongoose = require('mongoose');
const cadena = 'mongodb+srv://201622206:Rodolfo0@clustermongo.xxhmc.mongodb.net/BD-Login';
mongoose.connect(cadena, {
    useNewUrlParser: true,
    useUnifiedTopology:true

}).then(db=>console.log('base de datos conectada'))
    .catch(e=>console.log(e));
