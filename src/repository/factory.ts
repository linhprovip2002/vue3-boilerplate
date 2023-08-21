import authRepository from './entity/authRepository';
import userRepository from './entity/usersRepository';
interface Repository {
    [key: string]: {
      [key: string]: (...args: any[]) => Promise<any>;
    };
  }

const repositories:Repository = {
    'auth': authRepository,
    'users': userRepository,
};
const RepositoryFactory = {
    get: (name: string) => repositories[name]
};
export default RepositoryFactory;