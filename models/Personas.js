const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
    primer_nombre: {
        type: String,
        required: true
    },
    segundo_nombre: {
        type: String,
        required: false
    },
    apellido: {
        type: String,
        required: true
    },
    nombre_usuario: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    escuela: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true

    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
 
});

ProductoSchema.pre('save', function(next){
    const usuario=this;
    if(!usuario.isModified('password')){
        return next();
    }
    bcrypt.genSalt(10,(err, salt)=>{
        if(err){
            next(err);
        }
        bcrypt.hash(usuario.password, salt, null, (err, hash)=>{
            if(err){
                next(err);
            }
            usuario.password=hash;
            next();
        })
    })
});

module.exports = mongoose.model('Persona', ProductoSchema);
