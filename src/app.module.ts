import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity'; 
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '',
      database: 'auth_google',
      entities: [User], 
      synchronize: true, 
    }),
    UsersModule,
    AuthModule
  ],
})
export class AppModule {}
