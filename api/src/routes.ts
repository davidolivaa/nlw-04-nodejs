import { Router } from 'express';

// importaçao dos controles
import { UserController } from './controllers/UserController'; 
import { SurveysController } from './controllers/SurveysController';

const router = Router();

const userController = new UserController(); // na var userController é armazenado um objeto criado com base na class UserController que esta no arquivo UserController.ts
const surveysController = new SurveysController();

router.post('/users', userController.create); // requisiçao criada com post e parametros enviados

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

export { router };
