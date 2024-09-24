import { UsersService } from './user.service';
import { User } from './entity/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOneByEmail(email: string): Promise<User>;
    create(userData: Partial<User>): Promise<User>;
}
