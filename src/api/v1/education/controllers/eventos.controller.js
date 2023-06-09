import * as eventoService from '../services/evento.service';
import boom from '@hapi/boom';

export const getEventosList = async (req, res, next) => {
    try {
        const eventosList = await eventoService.getEventosList();
        if (!eventosList.success) throw boom.notFound(eventosList);
        else if (eventosList.success) res.status(200).json(eventosList);
    } catch (error) {
        next(error);
    }
};

export const getEventoItem = async (req, res, next) => {
    try {
        const { fecha } = req.params;
        const eventoItem = await eventoService.getEventosItem(fecha);
        if(!eventoItem.success) throw boom.notFound(eventoItem);
        else if (eventoItem.success) res.status(200).json(eventoItem);
    } catch (error) {
        next(error);
    }
};


export const putEventoItem = async (req, res, next) => {
    try {
      const { fecha } = req.params;
      const eventoItem = req.body;
      const eventoToUpdate = await eventoService.putEventoItem(fecha, eventoItem );
      if (!eventoToUpdate.success) throw boom.badRequest('No se pudo actualizar el evento.');
      else if (eventoToUpdate.success) res.status(200).json(eventoToUpdate);
    } catch (error) {
      next(error);
    }
};

export const postEventoItem = async (req, res, next) => {
    try {
        const eventoItem = req.body;
        const eventoAdded = await eventoService.postEventoItem(eventoItem);
        if (!eventoAdded.success) throw boom.badRequest('No se pudo insertar el evento.');
        else if (eventoAdded.success) res.status(200).json(eventoAdded);    
    } catch (error) {
        next(error);
    }
};

export const deleteEventoItem = async (req, res, next) => {
    try {
        const fecha = req.params;
        const eventoToDelete = await eventoService.deleteEventoItem(fecha);
        if (!eventoToDelete.success) throw boom.notFound(eventoToDelete);
        else if (eventoToDelete.success) res.status(200).json(eventoToDelete);    
    } catch (error) {
        next(error);
    }
};