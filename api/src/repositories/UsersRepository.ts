import { EntityRepository, Repository } from 'typeorm';

import { User } from '../models/User'; // importa o User.ts que é onde a tabela é criada

@EntityRepository(User)
class UsersRepository extends Repository<User> {} // criaçao de class que é extensao de Repository 

export { UsersRepository }; 
