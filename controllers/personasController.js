const Persona = require("../models/Personas");

exports.crearPersona = async (req, res) =>{
    
    try {
        let persona;

        //Creamos nuestro producto

        persona = new Persona(req.body);

        await persona.save();
        res.send(persona);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerPersonas = async (req, res) =>{

    try {
        const personas = await Persona.find();
        res.json(personas)


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarPersona = async(req, res)=>{
 
    try {
        
        const{primer_nombre,password, segundo_nombre, apellido, nombre_usuario,email,escuela,telefono} = req.body;
        let persona = await Persona.findById(req.params.id);
        if (!persona) {
            res.status(404).json({msg:'No existe la persona' })

        }
        persona.primer_nombre = primer_nombre;
        persona.password = password;
        persona.segundo_nombre = segundo_nombre;
        persona.apellido = apellido;
        persona.nombre_usuario = nombre_usuario;
        persona.email = email;
        persona.escuela = escuela;
        persona.telefono = telefono;

        persona = await Persona.findOneAndUpdate({ _id:req.params.id},persona,{new: true} )
        res.json(persona);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.obtenerPersona = async(req, res)=>{
 
    try {
        
       
        let persona = await Persona.findById(req.params.id);
        if (!persona) {
            res.status(404).json({msg:'No existe la persona' })

        }
      
      
        res.json(persona);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}
exports.eliminarPersona = async(req, res)=>{
 
    try {
        
       
        let persona = await Persona.findById(req.params.id);
        if (!persona) {
            res.status(404).json({msg:'No existe la persona' })

        }
      
        await persona.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Persona eliminado correctamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}