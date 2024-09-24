import { Request, Response } from 'express';
export declare class AuthController {
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: Request & {
        user: any;
    }, res: Response): Promise<void>;
    success(req: any): {
        message: string;
        user: any;
    };
    failure(): {
        message: string;
    };
}
