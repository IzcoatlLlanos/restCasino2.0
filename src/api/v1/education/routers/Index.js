import { Router } from 'express'; 
import config from '../../../../config/config'; 

// Import Routes 
import eventosRouter from './eventos.routes';

//import ordersRoutes from './orders.routes'; 
const routerAPI = (app) => { 
  const router = Router(); 
  const api = config.API_URL; 
  app.use(api, router); 
  // Routes 
  router.use('/eventos', eventosRouter); 

  return router; 
}; 
module.exports = routerAPI;