import { Router } from "express";
import * as eventosController from '../controllers/eventos.controller';

const router = Router(); 

router.get('/',eventosController.getEventosList);
router.get('/:fecha',eventosController.getEventoItem);
router.put('/:fecha',eventosController.putEventoItem);
router.post('/',eventosController.postEventoItem);
router.delete('/:fecha',eventosController.deleteEventoItem);

export default router;