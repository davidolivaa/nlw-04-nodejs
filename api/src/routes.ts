import { Router } from 'express';

// importaçao dos controles
import { UserController } from './controllers/UserController'; 
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController'

const router = Router();

const userController = new UserController(); // na var userController é armazenado um objeto criado com base na class UserController que esta no arquivo UserController.ts
const surveysController = new SurveysController();

const sendMailController = new SendMailController()

router.post('/users', userController.create); // requisiçao criada com post e parametros enviados

router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);

router.post("/sendMail", sendMailController.execute)

export { router };
