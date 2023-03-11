import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupervisorsModule } from './supervisors/supervisors.module';
//import { Users } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { BccModule } from './bcc/bcc.module';
import { Users } from './users/entities/user.entity';
import { BCC } from './bcc/entities/bcc.entity';
//import { BCC } from './bcc/entities/bcc.entity';
import { ProducerModule } from './producer/producer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '61.1.113.62',
      port: 1433,
      username: 'dairy',
      password: 'Dairy@123',
      database: 'VDAIRY',
      synchronize: false,
      logging: false,
      entities: [Users, BCC],
      options: {
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1',
        },
        enableArithAbort: true,
        encrypt: false,
        tdsVersion: '7_1',
      },
    }),
    SupervisorsModule,
    UsersModule,
    BccModule,
    ProducerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
