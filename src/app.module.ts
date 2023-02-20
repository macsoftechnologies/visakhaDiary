import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '61.1.113.62',
      port: 1433,
      username: 'dairy',
      password: 'Dairy@123',
      database: 'mcsas',
      synchronize: false,
      logging: false,
      // entities: [__dirname + "/*"],
      options: {
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1',
        },
        enableArithAbort: true,
        //trustServerCertificate: true,
        tdsVersion: '7_1',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
