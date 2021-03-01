import { Request, Response } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

//import { User } from '../models/User';
import { UsersRepository } from '../repositories/UsersRepository'; // importaçao da class criada
import * as yup from 'yup'

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    //const body = request.body
    //console.log(body)
    //return response.send()
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required()
    })

    // if(!await schema.isValid(request.body)){
    //   return response.status(400).json({ error: "Validation Failed" })
    // }

    try{
      await schema.validate(request.body, {abortEarly: false})
    } catch(err){
      return response.status(400).json({error: "Validation Failed"})
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) {
      return response.status(400).json({ error: 'User already exists!' });
    }

    const user = usersRepository.create({
      name,
      email,
    });

    await usersRepository.save(user);

    return response.status(201).json(user);
  }
}

export { UserController };
