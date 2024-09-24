import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findOneByEmail(email: string): Promise<User | undefined>;
    create(userData: Partial<User>): Promise<User>;
}
