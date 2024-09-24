import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: Request & { user: any }, @Res() res: Response) {
   const user = req.user as any; 

   const accessToken = user.accessToken; 

   if (!accessToken) {
     return res.redirect('http://localhost:3000/auth/failure');
   }

   return res.redirect(`http://localhost:3000/auth/success?token=${accessToken}`);
  }

  @Get('success')
  success(@Req() req) {
    return { message: 'Registration Successful', user: req.user };
  }

  @Get('failure')
  failure() {
    return { message: 'Registration Failed' };
  }
}
