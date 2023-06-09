import mongoose from "mongoose";

const EventoSchema = new mongoose.Schema({
    fecha               : { type : String },
    horaInicio          : { type : String },
    horaFin             : { type : String },
    nombreCliente       : { type : String },
    celularCliente      : { type : String },
    tipoEvento          : { type : String },
    nota                : { type : String },
    llenadoAgua         : { type : Number },
    mesaRegalos         : { type : String },
    cantPersonas        : { type : Number },
    brincolin           : { type : String },
    mantelColor         : [{ type : String }],
    precioTotal         : { type : Number },
    aCuenta             : { type : Number },
    resto               : { type : Number },
    metodoPago          : [{ type : String }],
    estatus             : { type : String },
    activo              : { type : String }
});

//Export
export default mongoose.model(
    'cat_eventos',
    EventoSchema,
    'cat_eventos'
)