import eventoModel from "../models/evento.model";

export const getEventosList = async () => {
    try {
        const eventosList = await eventoModel.find();
        return {success: true, eventosList};
    } catch (error) {
        return {success: false, error};
    }
};

export const getEventosItem = async (_fecha) => {
    try {
        const eventoItem = await eventoModel.findOne({fecha: _fecha});
        return {success: true, eventoItem};
    } catch (error) {
        return {success: false, error};
    }
};

export const putEventoItem = async (_fecha, eventoItem) => {
    try {
        const eventoUpdated = await eventoModel.findOneAndUpdate({ fecha: _fecha }, eventoItem, {new: true,});
        return {success: true, eventoUpdated};
    } catch (error) {
        return {success: false, error};
    }
};

export const postEventoItem = async (eventoItem) => {
    try { 
        const newEvento = await eventoModel(eventoItem); 
        newEvento.save(); 
        return {success: true, newEvento};
    } catch (error) { 
        return {success: false, error};
    } 
};

export const deleteEventoItem = async (_fecha) => {
    try {
        const eventoDeleted = await eventoModel.findOneAndDelete({ fecha: _fecha });
        return {success: true, eventoDeleted};
    } catch (error) {
        return {success: false, error};
    }
};